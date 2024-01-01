import { ResponseModel } from "../../ResponseModel";
import { StudentEducationModel } from "../StudentEducationModel";


export interface GetAllStudentEducationModel{
    responseModel:ResponseModel;
    items:StudentEducationModel[];
}