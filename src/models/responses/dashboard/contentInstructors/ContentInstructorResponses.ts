import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { GetListInstructorResponse } from "../instructors/InstructorResponses";

export interface ContentInstructorResponse extends SingleResponseModel{
 }
 
  export interface GetListContentInstructorResponse extends GetAllModel<ContentInstructorResponse>{
 }
 
  export interface CreatedContentInstructorResponse extends CreatedResponseModel{
 }
 
  export interface UpdatedContentInstructorResponse extends UpdatedResponseModel{
 }