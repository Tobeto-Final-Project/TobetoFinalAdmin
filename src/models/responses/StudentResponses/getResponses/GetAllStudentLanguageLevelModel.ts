import { ResponseModel } from "../../ResponseModel";
import { StudentLanguageLevelModel } from "../StudentLanguageLevelModel";


export interface GetAllStudentLanguageLevelModel{
    responseModel:ResponseModel;
    items:StudentLanguageLevelModel[];
}