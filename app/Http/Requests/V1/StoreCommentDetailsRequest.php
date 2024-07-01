<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreCommentDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->isMethod('POST')) {
            return [
                'noidung' => 'required|string',
                'id_binhluan' => 'required|numeric',
                'id_user' => 'required|numeric',
            ];
        } else {
            return [
                'noidung' => 'sometimes|required|string',
                'id_binhluan' => 'sometimes|required|numeric',
                'id_user' => 'sometimes|required|numeric',
            ];
        }
    }
}
