@extends('layouts.app')

@section('title', 'New Courses Transfer Application')

@section('content')

    <div class="wrapper wrapper-content animated fadeInRight ">
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
            <h2>Course Transfer Panel</h2>
            <ol class="breadcrumb">
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/myApplication">Transfer Courses</a>
                </li>
                <li class="active">
                    <a href="/transferCourses/newApplication"><strong>New Transfer Application</strong></a>
                </li>
            </ol>
        </div>
    </div>
    <div class="row">
        <div class="ibox">
            <div class="ibox-content">
                <form id="new_application_form" method="POST" action="/transferCourses/newApplication">
                    {{ csrf_field() }}

                    <div class="m-t-md">
                        <h2>Course Information</h2>
                    </div>

                    <div class="row m-b-xs">
                        <div class="col-md-12 col-lg-12">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="univName">University</label>
                                        <input type="text" class="form-control" id="univName" name="univName" placeholder="Full Name of University">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="courseCode">Course Code</label>
                                        <input type="text" class="form-control" id="courseCode" name="courseCode" placeholder="e.g. ECON102">
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <label for="courseName">Course Title</label>
                                        <input type="text" class="form-control" id="courseName" name="courseName" placeholder="e.g. Principle of Microeconomics ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="m-t-md">
                        <hr>
                        <h2>Application Information</h2>
                    </div>
                    <div class="row m-b-xs">
                        <div class="col-md-12 col-lg-12">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label for="appType">Application Type</label>:<br>New for submitting a new course to review, Renew for updating the expire time of an existing course.<br>
                                        <select class="m-t-sm selectpicker form-control" id="appType" name="appType">
                                            <option value="New">New</option>
                                            <option value="Renew">Renew</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4 col-lg-4">
                                    <div class="form-group">
                                        <label for="tcaf">Transfer Credit Approval Form</label> in <b>PDF</b> format
                                        <input type="file" class="form-control" style="border: 0;" id="tcaf" name="tcaf">
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4">
                                    <div class="form-group">
                                        <label for="syllabus">Course Syllabus</label> in <b>PDF</b> format
                                        <input type="file" class="form-control" style="border: 0;" id="syllabus" name="syllabus">
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4">
                                    <div class="form-group">
                                        <label for="additionalMaterials">Additional Materials</label> in <b>.zip</b> format.
                                        <input type="file" class="form-control" style="border: 0;" id="additionalMaterials" name="additionalMaterials">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <strong style="color:red">Tips:</strong>
                                    <ul>
                                        <li>
                                            Pleace fill the Transfer Credit Approval Form ("Transfer Credit Approval Form (TCAF) (1)" on
                                            <a href="http://ji.sjtu.edu.cn/equivalence/index">Course Equivalencies</a>)
                                            and submit it in <span style="color:red">PDF</span> format.
                                        </li>
                                        <li>
                                            Please submit additional materials in a <span style="color:red">.zip</span> package.
                                            Additional materials include but not limited to: Course Schedule, Slides Sample, Homework Sample,
                                            Exam Sample, Lab Sample.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <label for="appComment">Additional Explanation for the Application</label>
                                    <textarea class="col-md-12 col-lg-12" name="appComment" id="appComment" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="m-t-md">
                        <hr>
                        <h2>Additional Information</h2>
                        <strong style="color:red">Attention:</strong>
                        Only for courses which are intended to be transferred back to substitute one of the JI courses.
                        Pleace fill the SJTU Transfer Form ("Credit Transfer Form (2)" on
                        <a href="http://ji.sjtu.edu.cn/equivalence/index">Course Equivalencies</a>)
                        and submit it in <span style="color:red">PDF</span> format.
                    </div>

                    <div class="row" style="margin-top: 10px;">
                        <div class="col-md-4 col-lg-4">
                            <div class="form-group">
                                <label for="jiCourseCode">JI Course Code</label>
                                <input type="text" class="form-control" id="jiCourseCode" name="jiCourseCode" placeholder="e.g. VG100">
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="form-group">
                                <label for="jiCourseName">JI Course Name</label>
                                <input type="text" class="form-control" id="jiCourseName" name="jiCourseName" placeholder="e.g. Introduction to Engineering">
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="form-group">
                                <label for="sjtuTransferForm">SJTU Transfer Form</label>
                                <input type="file" class="form-control" style="border: 0;" id="sjtuTransferForm" name="sjtuTransferForm">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <button type="submit" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-ok"></i> Submit</button>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="text-right">
                                <a href="/transferCourses/myApplication" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i> Cancel</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



@stop