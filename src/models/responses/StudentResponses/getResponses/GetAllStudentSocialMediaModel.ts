
import { ResponseModel } from "../../ResponseModel";
import { StudentSocialMediaModel } from "../StudentSocialMediaModel";


export interface GetAllStudentSocialMediaModel{
    responseModel:ResponseModel;
    items:StudentSocialMediaModel[];
}