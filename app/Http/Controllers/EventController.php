<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Requests\EventRequest;
use App\Http\Resources\EventResource;
use App\Http\Controllers\BaseCrudController;
use Carbon\CarbonImmutable;

class EventController extends BaseCrudController
{
     public function setup(){
        $this->model = new Event();
        $this->request = new EventRequest();
        $this->orderBy = [
            'start_date' => 'ASC'
        ];
     }

     public function filter($filter){
      $today = CarbonImmutable::now();
         switch ($filter) {
            case 'upcoming':
                  $this->query->where('start_date','>',$today->toDateString());
               break;

            case 'finished':
                  $this->query->where('end_date','<',$today->toDateString());
               break;

            case 'running':
                  $this->query->where('start_date','<=',$today->toDateString())
                              ->where('end_date','>=',$today->toDateString());
            break;

            case 'within_7':
                  $this->query->where('start_date','>',$today->toDateString())
                              ->where('start_date','<',$today->addDays(7)->toDateString());
            break;

            case 'before_7':
                  $this->query->where('end_date','<',$today)
                              ->where('end_date','>',$today->subDays(7)->toDateString());
            break;
         }
     }

     public function returnResourceCollection(){
        return EventResource::collection($this->query->paginate($this->per_page));
     }
}
