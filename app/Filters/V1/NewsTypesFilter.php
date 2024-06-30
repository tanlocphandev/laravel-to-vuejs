<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class NewsTypesFilter extends ApiFilter
{
    protected $safeParams = [
        'name' => ['eq', 'like'],
        'category_id' => ['eq'],
    ];

    protected $columnMap = [
        'name' => 'tenloaitin',
        'category_id' => 'id_theloai',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>=',
        'like' => 'LIKE',
    ];
}
