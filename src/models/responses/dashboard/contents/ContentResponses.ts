import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { GetListInstructorResponse, InstructorResponse } from "../instructors/InstructorResponses";
import { TagResponse } from "../tags/TagResponses";

export interface ContentResponse extends SingleResponseModel{
    id:GUID;
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryName:string;
    languageName:string;
    subTypeName:string;
    manufacturerName:string;
    instructors?:InstructorResponse[];
    tags?:TagResponse[];
 }
 
  export interface GetListContentResponse extends GetAllModel<ContentResponse>{
 }
 
  export interface CreatedContentResponse extends CreatedResponseModel{
     id:GUID;
     name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
 }
 
  export interface UpdatedContentResponse extends UpdatedResponseModel{
    id:GUID|string;
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
 }

 export interface ContentTagResponse extends SingleResponseModel{
   id:GUID;
   contentId:GUID|string;
   tagId:GUID|string
}

 export interface GetListContentTagResponse extends GetAllModel<ContentResponse>{
}

 export interface CreatedContentTagResponse extends CreatedResponseModel{
    id:GUID;
    contentId:GUID|string;
    tagId:GUID|string
}

 export interface UpdatedContentTagResponse extends UpdatedResponseModel{
   id:GUID;
   contentId:GUID|string;
   tagId:GUID|string
}
 