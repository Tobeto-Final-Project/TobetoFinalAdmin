import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { GetListInstructorResponse, InstructorResponse } from "../instructors/InstructorResponses";

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