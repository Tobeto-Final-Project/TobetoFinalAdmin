import { ResponseModel } from "../../ResponseModel";
import { StudentExperienceModel } from "../StudentExperienceModel";


export interface GetAllStudentExperienceModel{
    responseModel:ResponseModel;
    items:StudentExperienceModel[];
}