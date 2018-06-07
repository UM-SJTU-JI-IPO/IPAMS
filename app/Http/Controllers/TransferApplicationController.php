<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

use App\TransferApplication;
use App\TransferCourse;
use Symfony\Component\Process\Exception\ProcessTimedOutException;

class TransferApplicationController extends Controller
{
    public function index()
    {
        return view('transfercourses.myapplications');
    }

    public function newApp()
    {
        return view('transfercourses.newapplication');
    }

    public function create()
    {
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

        $request = request();
        $sjtuID = Auth::user()->sjtuID;
        $univFormatedName = ucwords(strtolower($request->univName));
        $formatedCourseCode = strtoupper($request->courseCode);
        preg_match_all("/[A-Z]/", $univFormatedName, $univUCList);
        $univShortName = implode($univUCList[0]);
        $newCourse = TransferCourse::create([
            'university'    => $univFormatedName,
            'courseCode'    => $formatedCourseCode,
            'courseName'    => $request->courseName,
            'status'        => 'Application Submitted',
        ]);

        if ($request->jiCourseCode) //or $request->jiCourseName
        {
            $newCourse->update([
                'ifEquivalent'  => true,
                'jiCourseCode'  => $request->jiCourseCode,
                'jiCourseName'  => $request->jiCourseName,
            ]);
        }

        $newCourse->save();

        $basePath = 'transferCourses/';
        $folderName = $univShortName . $formatedCourseCode;
        if (!Storage::disk('public')->exists($basePath . $folderName))
        {
            Storage::makeDirectory($basePath . $folderName);
        }

        $tcafFile = Storage::disk('public')->putFileAs(
            $basePath . $folderName,
            request()->file('tcaf'),
            $newCourse->courseID . '_' . $request->courseCode . '_tcaf.pdf'
        );

        $syllabusFile = Storage::disk('public')->putFileAs(
            $basePath . $folderName,
            request()->file('syllabus'),
            $newCourse->courseID . '_' . $request->courseCode . '_syllabus.pdf'
        );

        $addMaterialsFile = null;
        if ($request->hasFile('additionalMaterials')) {
            $addMaterialsFile = Storage::disk('public')->putFileAs(
                $basePath . $folderName,
                request()->file('additionalMaterials'),
                $newCourse->courseID . '_' . $request->courseCode . '_addtionalMaterials.pdf'
            );
        }

        // Evaluation

        $newApplication = TransferApplication::create([
            'sjtuID'    => $sjtuID,
            'courseID'  => $newCourse->courseID,
            'type'      => $request->appType,
            'appComment'=> $request->appComment,
            'tcafFile'  => $tcafFile,
            'syllabusFile'=> $syllabusFile,
            'additionalMaterialsFile'=> $addMaterialsFile,
        ]);

        $newApplication->save();

        return redirect()->route('myTransferApplications');
    }

}
