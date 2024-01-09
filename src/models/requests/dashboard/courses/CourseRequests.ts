import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface CreateCourseRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateCourseRequest extends UpdateRequestModel{
    name:string
}

export interface CreateCourseContentRequest extends CreateRequestModel{
    courseId:GUID|string;
    contentId:GUID|string;
}

 export interface UpdateCourseContentRequest extends UpdateRequestModel{
    courseId:GUID|string;
    contentId:GUID|string;
}
