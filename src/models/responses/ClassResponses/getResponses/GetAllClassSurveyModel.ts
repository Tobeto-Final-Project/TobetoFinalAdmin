import { ClassSurveyModel } from "../ClassSurveyModel";
import { ResponseModel } from "../../ResponseModel";

export interface GetAllClassSurveyModel {
    responseModel:ResponseModel;
    classExam:ClassSurveyModel[];
}