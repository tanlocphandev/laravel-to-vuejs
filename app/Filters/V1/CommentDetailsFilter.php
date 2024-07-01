<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class CommentDetailsFilter extends ApiFilter
{
    protected $safeParams = [
        'noidung'  => ['like', 'eq'],
        'id_user'  => ['eq'],
        'id_binhluan'  => ['eq'],
    ];

    protected $columnMap = [
        'noidung' => 'noidung',
        'id_user' => 'id_user',
        'id_binhluan' => 'id_binhluan'
    ];

    protected $operatorMap = [
        'eq' => '=',
        'like' => 'LIKE',
    ];
}
