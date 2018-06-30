<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

use App\User;
use App\TransferApplication;
use App\TransferCourse;
use App\TransferEvaluation;
use App\Mail\newApplicationNotice;

use Symfony\Component\Process\Exception\ProcessTimedOutException;

class TransferApplicationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index()
    {
        $applications = User::find(Auth::user()->sjtuID)->hasManyTransferApplications()->get();
        foreach ($applications as $app)
        {
            $app->course = $app->appliedCourse()->first();
        }
        return view('transfercourses.myapplications',['applications' => $applications]);
    }

    public function newApp()
    {
        return view('transfercourses.newapplication');
    }

    public function create()
    {
        // Validate Form Inputs
        $this->validate(request(), [
            'univName' => 'required',
            'courseCode' => 'required',
            'courseName' => 'required',
            'appType' => 'required',
            'tcaf' => 'required|mimes:pdf',
            'syllabus' => 'required|mimes:pdf',
            'additionalMaterials' => 'nullable|mimes:zip',
            'appComment' => 'nullable',
            'jiCourseCode' => 'required_with_all:jiCourseName',
            'jiCourseName' => 'required_with_all:jiCourseCode',
        ]);

        // Format Inputs
        $request = request();
        $sjtuID = Auth::user()->sjtuID;
        $univFormatedName = ucwords(strtolower($request->univName));
        $courseCodeWithoutSpace = preg_replace('/\s+/', '', $request->courseCode);
        $formatedCourseCode = strtoupper($courseCodeWithoutSpace);

        // Check if submitted course exists
        $potentialCourse = TransferCourse::where('university', $univFormatedName)
                                         ->where('courseCode', $formatedCourseCode)
                                         ->first();
        if ($potentialCourse === null)
        {
            $newCourse = TransferCourse::create([
                'university'    => $univFormatedName,
                'courseCode'    => $formatedCourseCode,
                'courseName'    => $request->courseName,
                'status'        => 'Pending',
            ]);
        } else {
            $newCourse = $potentialCourse;
        }

        // Get Univ Short Name with Capital First Letters
        preg_match_all("/[A-Z]/", $univFormatedName, $univUCList);
        $univShortName = implode($univUCList[0]);

        // If submitted course has corresponding JI course
        if ($request->jiCourseCode) //or $request->jiCourseName
        {
            $newCourse->update([
                'ifEquivalent'  => true,
                'jiCourseCode'  => $request->jiCourseCode,
                'jiCourseName'  => $request->jiCourseName,
            ]);
        }

        // Create new application entry
        $newApplication = TransferApplication::create([
            'sjtuID'    => $sjtuID,
            'courseID'  => $newCourse->courseID,
            'type'      => $request->appType,
            'appComment'=> $request->appComment,
            'status'        => 'Application Submitted',
        ]);

        // Generate uploaded files directory
        $basePath = 'transferCourses/';
        $folderName = $univShortName . $formatedCourseCode;
        if (!Storage::disk('public')->exists($basePath . $folderName))
        {
            Storage::disk('public')->makeDirectory($basePath . $folderName);
        }

        // Store TCAF form
        $tcafFile = Storage::disk('public')->putFileAs(
            $basePath . $folderName,
            request()->file('tcaf'),
            $newApplication->applicationID . '_' . $request->courseCode . '_tcaf.pdf'
        );

        // Store syllabus
        $syllabusFile = Storage::disk('public')->putFileAs(
            $basePath . $folderName,
            request()->file('syllabus'),
            $newApplication->applicationID . '_' . $request->courseCode . '_syllabus.pdf'
        );

        // Store material if exists
        $addMaterialsFile = null;
        if ($request->hasFile('additionalMaterials')) {
            $addMaterialsFile = Storage::disk('public')->putFileAs(
                $basePath . $folderName,
                request()->file('additionalMaterials'),
                $newApplication->applicationID . '_' . $request->courseCode . '_addtionalMaterials.zip'
            );
        }

        // Update file directory into DB
        $newApplication->update([
            'tcafFile'  => $tcafFile,
            'syllabusFile'=> $syllabusFile,
            'additionalMaterialsFile'=> $addMaterialsFile,
        ]);



        // Update new course with application ID and save course
        $newCourse->update([
            'applicationID' => $newApplication->applicationID,
        ]);
        $newCourse->save;

        // Create new evaluations for submitted application
        foreach (User::all()->where('instituteRole','=','IPO') as $evaluator) {
            $newEvaluation = TransferEvaluation::create([
                'applicationID'     => $newApplication->applicationID,
                'evaluatorID'       => $evaluator->sjtuID,
                'evaluatorType'     => 'IPO PreEval',
                'evaluatorDecision' => 'Pending',
                'evaluationStatus'  => 'Pending',
            ]);
            Mail::to($evaluator->email)->queue(new newApplicationNotice($evaluator->name,
                                                                        User::find($newApplication->sjtuID)->name,
                                                                        $newApplication->appliedCourse));
            $newEvaluation->save();
        }

        // Update application columns related to evaluation
        $newApplication->update([
            'evaluationProgress'    => 'IPO PreEval',
            'evaluationResult'      => 'Pending',
        ]);

        // Save new application
        $newApplication->save();


        return redirect()->route('myTransferApplications');
    }

    public function listCourses()
    {
        $courses = TransferCourse::all();
        return view('transfercourses.allcourses', ['courses' => $courses]);
    }

    public function show($applicationID)
    {
        $application = TransferApplication::find($applicationID);
        $course = $application->appliedCourse;
        $applier = $application->applier;
        return view('transfercourses.applicationdetail',
            [
                'application'   => $application,
                'course'        => $course,
                'applier'       => $applier,
            ]);
    }

}
