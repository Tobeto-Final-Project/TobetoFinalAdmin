import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface LanguageLevelResponse extends SingleResponseModel{
   id:GUID;
   name:string;
   languageName:string;
   languageId:GUID;
}

 export interface GetListLanguageLevelResponse extends GetAllModel<LanguageLevelResponse>{
}

 export interface CreatedLanguageLevelResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
    languageId:GUID;
}

 export interface UpdatedLanguageLevelResponse extends UpdatedResponseModel{
   id:GUID|string;
   name:string;
   languageId:GUID;
}
