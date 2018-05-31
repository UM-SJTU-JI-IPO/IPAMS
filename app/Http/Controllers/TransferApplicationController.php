<?php

namespace App\Http\Controllers;

use App\transferApplication;
use Illuminate\Http\Request;

class TransferApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('transfercourses.myapplications');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('transfercourses.newapplication');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TransferApplication  $transferApplication
     * @return \Illuminate\Http\Response
     */
    public function show(TransferApplication $transferApplication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TransferApplication  $transferApplication
     * @return \Illuminate\Http\Response
     */
    public function edit(TransferApplication $transferApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TransferApplication  $transferApplication
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TransferApplication $transferApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TransferApplication  $transferApplication
     * @return \Illuminate\Http\Response
     */
    public function destroy(TransferApplication $transferApplication)
    {
        //
    }
}
