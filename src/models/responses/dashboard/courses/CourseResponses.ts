import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { ContentResponse } from "../contents/ContentResponses";


 export interface CourseResponse extends SingleResponseModel{
   id:GUID|string;
   name:string;
   contents?:ContentResponse[];
}

 export interface GetListCourseResponse extends GetAllModel<CourseResponse>{
}

 export interface CreatedCourseResponse extends CreatedResponseModel{
    id:GUID|string;
    name:string;
}

 export interface UpdatedCourseResponse extends UpdatedResponseModel{
   id:string|string;
   name:string;
}


export interface CourseContentResponse extends SingleResponseModel{
    id:GUID|string;
    courseId:GUID|string;
     contentId:GUID|string;
 }
 
  export interface GetListCourseContentResponse extends GetAllModel<CourseResponse>{
 }
 
  export interface CreatedCourseContentResponse extends CreatedResponseModel{
     id:GUID|string;
     courseId:GUID|string;
     contentId:GUID|string;
 }
 
  export interface UpdatedCourseContentResponse extends UpdatedResponseModel{
    id:GUID|string;
    courseId:GUID|string;
     contentId:GUID|string;
 }
 