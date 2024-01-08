import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface ContentCategoryResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListContentCategoryResponse extends GetAllModel<ContentCategoryResponse>{
}

 export interface CreatedContentCategoryResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedContentCategoryResponse extends UpdatedResponseModel{
   id:string;
   name:string;
}

