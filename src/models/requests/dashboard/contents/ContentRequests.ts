import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

 export interface CreateContentRequest extends CreateRequestModel{
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
}

 export interface UpdateContentRequest extends UpdateRequestModel{
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
}
export interface CreateContentTagRequest extends CreateRequestModel{
    contentId:GUID|string;
    tagId:GUID|string
}

 export interface UpdateContentTagRequest extends UpdateRequestModel{
    contentId:GUID|string;
    tagId:GUID|string
}