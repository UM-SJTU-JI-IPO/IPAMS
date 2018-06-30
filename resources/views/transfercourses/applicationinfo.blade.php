<div class="row">
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Application No. {{ $application->applicationID }}</h4>
    </div>
</div>
<div class="row">
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Applier </h4>
        <p>{{ $applier->name }}</p>
    </div>
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">University </h4>
        <p>{{ $course->university }}</p>
    </div>
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Course Code </h4>
        <p>{{ $course->courseCode }}</p>
    </div>
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Course Name</h4>
        <p>{{ $course->courseName }}</p>
    </div>
</div>
<div class="row m-t-sm">
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Transfer Course Application Form</h4>
        <a target="_blank" href="/storage/{{ $application->tcafFile }}"><button class="btn-primary btn btn-sm">View</button></a>
    </div>
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Course Syllabus</h4>
        <a target="_blank" href="/storage/{{ $application->syllabusFile }}"><button class="btn-primary btn btn-sm">View</button></a>
    </div>
    <div class="col-md-3 col-lg-3">
        <h4 class="m-t-none m-b">Additional Materials</h4>
        @if ($application->additionalMaterialsFile)
            <a href="/storage/{{ $application->additionalMaterialsFile }}"><button class="btn-primary btn btn-sm">Download</button></a>
        @else
            No Material
        @endif
    </div>
</div>
<div class="row m-t-sm">
    <div class="col-md-12 col-lg-12">
        <h4 class="m-t-none m-b">Additional Comment</h4>
        <p>
            {{ $application->appComment }}
        </p>
    </div>
</div>
@if ($course->ifEquivalent)
    <div class="row m-t-sm">
        <div class="col-md-6 col-lg-6">
            <h4 class="m-t-none m-b">Equivalent JI Course Code</h4>
            <p>
                {{ $course->jiCourseCode }}
            </p>
        </div>
        <div class="col-md-6 col-lg-6">
            <h4 class="m-t-none m-b">Equivalent JI Course Code</h4>
            <p>
                {{ $course->jiCourseName }}
            </p>
        </div>
    </div>
@endif