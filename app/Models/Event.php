<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';
    
    protected $fillable = ['name','description','start_date','end_date','active'];

    protected $appends = ['status'];

    public function getStatusAttribute($value){
        $today = Carbon::now()->toDateString();
        if($this->start_date > $today){
            return 'UPCOMING';
        }
        if($this->end_date < $today){
            return 'FINISHED';
        }
        if($this->start_date <= $today && $this->end_date >= $today){
            return 'RUNNING';
        }
    }
    
}