<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class NewsFilter extends ApiFilter
{
    protected $safeParams = [
        'tieude'  => ['like',  'eq'],
        'mota'  => ['like', 'eq'],
        'noidung'  => ['like',  'eq'],
        'noibat'  => ['eq'],
        'luotxem'  => ['eq', 'gt', 'lt', 'gte', 'lte'],
        'id_loaitin'  => ['eq'],
        'id_user'  => ['eq'],
    ];

    protected $columnMap = [
        'tieude' => 'tieude',
        'mota' => 'mota',
        'noidung' => 'noidung',
        'noibat' => 'noibat',
        'luotxem' => 'luotxem',
        'id_loaitin' => 'id_loaitin',
        'id_user' => 'id_user',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'like' => 'LIKE',
        'lt' => '<',
        'gt' => '>',
        'lte' => '<=',
        'gte' => '>=',
    ];
}
