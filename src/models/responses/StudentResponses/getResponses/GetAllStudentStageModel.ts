
import { ResponseModel } from "../../ResponseModel";
import { StudentStageModel } from "../StudentStageModel";


export interface GetAllStudentStageModel{
    responseModel:ResponseModel;
    items:StudentStageModel[];
}