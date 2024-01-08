import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface LanguageResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListLanguageResponse extends GetAllModel<LanguageResponse>{
}

 export interface CreatedLanguageResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedLanguageResponse extends UpdatedResponseModel{
   id:GUID;
   name:string;
}
