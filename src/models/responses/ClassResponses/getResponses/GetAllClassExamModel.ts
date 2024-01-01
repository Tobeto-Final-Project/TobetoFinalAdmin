import { ClassExamModel } from "../ClassExamModel";
import { ResponseModel } from "../../ResponseModel";


export interface GetListClassExamListItemDto {
    responseModel:ResponseModel;
    classExam:ClassExamModel[];
}