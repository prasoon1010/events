<?php

namespace App\Http\Controllers;

use App\Traits\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

abstract class BaseCrudController extends Controller
{
    
    protected $model;
    protected $request;
    protected $orderBy = [];
    protected $query;
    protected $per_page;

    public function __construct(){
        $this->setup();
        $this->query = $this->model->query();
    }

    abstract public function setup();

    abstract public function filter($filter);

    abstract public function returnResourceCollection();

    public function index(Request $request){
        $this->per_page = $request->per_page ?? 10;
        if(count($this->orderBy)){
            foreach($this->orderBy as $column => $type){
                $this->query->orderBy($column,$type);
            }
        }

        if($request->filter){
            $this->filter($request->filter);
        }
        
        return $this->returnResourceCollection();
    }

    public function store(Request $request){
        try {
            $validator = Validator::make($request->all(),
                $this->request->rules(),
                $this->request->messages(),
                $this->request->attributes(),
            );
            if($validator->fails()){
                return response()->json(['errors'=>$validator->errors()],422);
            }

            $data = $request->only($this->model->getFillable());
            $item = $this->model->create($data);
            return response()->json(['message' => 'Data Created Successfully !!!','data' => $item],200);
        } catch (\Throwable $th) {
            return response()->json(['error' => true,'message' => $th->getMessage()],500);
        }
        
    }

    public function edit($id){
        $data = $this->model->find($id);
        return response()->json($data,200);
    }

    public function update(Request $request){
        try {
            $validator = Validator::make($request->all(), 
                $this->request->rules(),
                $this->request->messages(),
                $this->request->attributes(),
            );
            if($validator->fails()){
                return response()->json(['errors'=>$validator->errors()],422);
            }

            $item = $this->model->find($request->id);
            if(!$item){
                return response()->json(['errors' => 'Bad Request'],404);
            }
            $data = $request->only($this->model->getFillable());
            $item->update($data);
            return response()->json(['message' => 'Data Updated Successfully','data' => $item],200);

        } catch (\Throwable $th) {
            return response()->json(['error' => true,'message' => $th->getMessage()],500);
        }
        
    }

    public function destroy($id){
        try {
            $item = $this->model->find($id);
            if(!$item){
                return response()->json(['error' => 'Bad Request !!'],404);
            }
            if($item->delete()){
                return response()->json(['message' => 'Data Deleted !!']);
            }

            return response()->json(['error' => 'Error Deleting Data !!']);
        } catch (\Throwable $th) {
            return response()->json(['error' => true,'message' => $th->getMessage()],500);
        }
    }
}
