import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface StageResponse extends SingleResponseModel{
   id:GUID;
   description:string
}

export interface GetListStageResponse extends GetAllModel<StageResponse>{
  
}

export interface CreatedStageResponse extends CreatedResponseModel{
    id:GUID;
    description:string

}

export interface UpdatedStageResponse extends UpdatedResponseModel{
    id:GUID;
    description:string

}


