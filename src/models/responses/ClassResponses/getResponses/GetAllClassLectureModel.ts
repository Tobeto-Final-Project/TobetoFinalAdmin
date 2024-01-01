import { ClassLectureModel } from "../ClassLectureModel";
import { ResponseModel } from "../../ResponseModel";


export interface GetAllClassLectureModel {
    responseModel:ResponseModel;
    classExam:ClassLectureModel[];
}