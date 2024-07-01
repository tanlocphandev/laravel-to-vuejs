<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class CommentFilter extends ApiFilter
{
    protected $safeParams = [
        'noidung'  => ['like', 'eq'],
        'id_user'  => ['eq'],
        'id_tintuc'  => ['eq'],
    ];

    protected $columnMap = [
        'noidung' => 'noidung',
        'id_user' => 'id_user',
        'id_tintuc' => 'id_tintuc'
    ];

    protected $operatorMap = [
        'eq' => '=',
        'like' => 'LIKE',
    ];
}
