<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\NewsTypesFilter;
use App\Response\Exception\NotFoundException;
use App\Response\OkResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\LoaiTin;
use App\Http\Requests\V1\NewsTypesRequest;
use App\Http\Requests\V1\UpdateNewsTypesRequest;

class NewsTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filter = new NewsTypesFilter();

        $filterItems = $filter->transform($request); // ['column', 'operator', 'value']
        $includeCategory = $request->query('include_category');
        $includeNews = $request->query('include_news');

        $data = LoaiTin::where($filterItems);

        if ($includeCategory) {
            $data = $data->with('theloai');
        }

        if ($includeNews) {
            $data = $data->with('tintuc');
        }

        $data = $data->paginate($request->query('limit', 10))->appends($request->query());

        $response = new OkResponse("Get all news types successfully", $data->items());

        return $response->pagination($data)->send();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsTypesRequest $request)
    {
        $foundNewsTypes = LoaiTin::where('tenloaitin', 'LIKE', '%' . $request->tenloaitin . '%')
            ->where('id_theloai', '=', $request->id_theloai)
            ->first();

        if ($foundNewsTypes) {
            return (new NotFoundException('News type already exists'))->sendError();
        }

        $added = LoaiTin::create($request->all());

        if (!$added) {
            return (new NotFoundException('News type not added'))->sendError();
        }

        $response = new OkResponse("News type added successfully", $added->toArray());

        return $response->send();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $includeCategory = request()->query('include_category');
        $includeNews = request()->query('include_news');
        $data = LoaiTin::where('id', '=', $id);

        if ($includeCategory) {
            $data->with('theloai');
        }

        if ($includeNews) {
            $data->with('tintuc');
        }

        $data = $data->first();

        if (!$data) {
            return (new NotFoundException('Không tìm thấy loại tin tức'))->sendError();
        }

        $response = new OkResponse("Get all news types successfully", $data);

        return $response->send();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNewsTypesRequest $request, $id)
    {
        $foundNewsTypesById = LoaiTin::where('id', '=', $id)->first();

        if (!$foundNewsTypesById) {
            return (new NotFoundException('News type not found'))->sendError();
        }

        if (isset($request->tenloaitin) && !empty($request->tenloaitin)) {
            $foundNewsTypes = LoaiTin::where('tenloaitin', 'LIKE', '%' . $request->tenloaitin . '%')
                ->where('id_theloai', '=', $foundNewsTypesById->id_theloai)
                ->first();

            if ($foundNewsTypes && $foundNewsTypes->id != $id) {
                return (new NotFoundException('News type already exists'))->sendError();
            }
        }

        if (isset($request->id_theloai) && !empty($request->id_theloai)) {
            $foundNewsTypes = LoaiTin::where('id_theloai', '=', $request->id_theloai)
                ->where('tenloaitin', 'LIKE', '%' . $foundNewsTypesById->tenloaitin . '%')
                ->first();

            if ($foundNewsTypes && $foundNewsTypes->id != $id) {
                return (new NotFoundException('News type already exists'))->sendError();
            }
        }

        $updated = LoaiTin::where('id', '=', $id)->update($request->all());

        if (!$updated) {
            return (new NotFoundException('News type not updated'))->sendError();
        }

        $response = new OkResponse("News type updated successfully", $updated);

        return $response->send();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = LoaiTin::where('id', '=', $id)->delete();

        if (!$deleted) {
            return (new NotFoundException('News type not deleted'))->sendError();
        }

        $response = new OkResponse("News type deleted successfully", $deleted);

        return $response->send();
    }
}
