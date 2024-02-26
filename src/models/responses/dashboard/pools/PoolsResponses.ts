import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface PoolResponse extends SingleResponseModel{
   id:string;
   name:string;
}

export interface GetListPoolResponse extends GetAllModel<PoolResponse>{
  
}

export interface CreatedPoolResponse extends CreatedResponseModel{
    id:string;
    name:string;

}

export interface UpdatedPoolResponse extends UpdatedResponseModel{
   id:string;
   name:string;
}