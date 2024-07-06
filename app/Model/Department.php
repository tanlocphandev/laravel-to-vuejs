<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'departments';

    protected $fillable = ['name', 'description', 'image', 'faculty_id'];

    public $timestamps = true;

    public function personnel()
    {
        return $this->hasMany('App\Model\Personnel', 'department_id', 'id');
    }

    public function faculty()
    {
        return $this->belongsTo('App\Model\Faculty', 'faculty_id', 'id');
    }
}
