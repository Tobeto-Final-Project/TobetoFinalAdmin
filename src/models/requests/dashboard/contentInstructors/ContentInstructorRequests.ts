import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface CreateContentInstructorRequest extends CreateRequestModel{
    contentId:GUID|string;
    instructorId:GUID|string;
}   
export interface UpdateContentInstructorRequest extends UpdateRequestModel{
    contentId:GUID|string;
    instructorId:GUID|string;
}   