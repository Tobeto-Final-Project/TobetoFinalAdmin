import { ResponseModel } from "../../ResponseModel";
import { StudentSkillModel } from "../StudentSkillModel";


export interface GetAllStudentSkillModel{
    responseModel:ResponseModel;
    items:StudentSkillModel[];
}