<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Images;
use Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image= $request->image;
        $nam = time().'.'.$image->getClientOriginalExtension();
        $destinationPath = public_path();
        Image::make($image->getRealPath())->greyscale()->save($destinationPath.'/'.$nam);
       
        //  return $img->response('jpg');
        // if ($request->hasFile('image')){
        //     $filename= $request->image->getClientOriginalName();
        //     $imaged = time().'_'.$filename;
        //     $userid= 1;
        //     // $path = storage_path( $userid .'/'. $imaged);
        //     $request->image->storeAs($userid,$imaged, 'public');
        // }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
