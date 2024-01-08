import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface TagResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

export interface GetListTagResponse extends GetAllModel<TagResponse>{
}

 export interface CreatedTagResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedTagResponse extends UpdatedResponseModel{
   id:GUID;
   name:string;
}
