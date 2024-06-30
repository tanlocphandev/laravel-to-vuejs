<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Resources\V1\CategoryCollection;
use App\Http\Resources\V1\CategoryResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TheLoai;
use App\Filters\V1\CategoryFilter;
use Illuminate\Http\Response;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *  @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $filter = new CategoryFilter();

        $filterItems = $filter->transform($request); // ['column', 'operator', 'value']

        if (count($filterItems) == 0) {
            return CategoryCollection::make(TheLoai::paginate())->response();
        } else {
            $category = TheLoai::where($filterItems)->paginate();

            return CategoryCollection::make($category->appends($request->query()))->response();
        }
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
        return new CategoryResource(TheLoai::find($id));
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
