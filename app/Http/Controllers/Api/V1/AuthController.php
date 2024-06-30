<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use DateTime;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $checkName = DB::table('users')->where('name', $request->name)->first();
        $checkEmail = DB::table('users')->where('email', $request->email)->first();

        if (isset($checkEmail) && isset($checkName)) {
            return redirect('quantri/taikhoan/quantri/them')->with('thongbao', "1");
        }

        $fileName = "avatar.jpg";

        if ($request->hasFile('hinhanh')) {
            $now = new DateTime();
            $file = $request->file('hinhanh');
            $fileName = $now->getTimestamp() . $file->getClientOriginalName();
            $file->move('assets/user/images/avatar', $fileName);
        }

        $newUser  = new User();
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->viewname = $request->viewname;
        $newUser->password = bcrypt($request->password);
        $newUser->permission = $request->permission;
        $newUser->image = $fileName;
        $check =  $newUser->save();

        return redirect('quantri/taikhoan/quantri/them')->with('thongbao', $check);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
