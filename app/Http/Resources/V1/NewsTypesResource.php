<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class NewsTypesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'tenloaitin' => $this->tenloaitin,
            'id_theloai' =>  $this->id_theloai,
            'theloai' => CategoryResource::make($this->whenLoaded('theloai')),
            'tintuc' => $this->whenLoaded('tintuc'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
