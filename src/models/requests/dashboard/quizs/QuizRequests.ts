import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

 export interface CreateQuizRequest extends CreateRequestModel{
    name:string,
    description:string,
    duration:number,
    quizQuestionCount:number,
    poolId:number
}

 export interface UpdateQuizRequest extends UpdateRequestModel{
    name:string;
}
