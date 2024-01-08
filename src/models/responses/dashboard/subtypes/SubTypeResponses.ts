import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface SubTypeResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListSubTypeResponse extends GetAllModel<SubTypeResponse>{
}

 export interface CreatedSubTypeResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedSubTypeResponse extends UpdatedResponseModel{
   id:GUID;
   name:string;
}



