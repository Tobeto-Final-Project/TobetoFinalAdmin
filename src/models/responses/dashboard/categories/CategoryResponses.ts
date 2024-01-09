import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface CategoryResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListCategoryResponse extends GetAllModel<CategoryResponse>{
}

 export interface CreatedCategoryResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedCategoryResponse extends UpdatedResponseModel{
   id:string;
   name:string;
}

