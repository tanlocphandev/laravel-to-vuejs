<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class DepartmentFilter extends ApiFilter
{
    protected $safeParams = [
        'name'  => ['like', 'eq'],
        'description'  => ['like', 'eq'],
        'faculty_id'  => ['eq'],
    ];

    protected $columnMap = [
        'name'  => 'name',
        'description'  => 'description',
        'faculty_id'  => 'faculty_id',
    ];

    protected $operatorMap = [
        'like' => 'LIKE',
        'eq' => '='
    ];
}
