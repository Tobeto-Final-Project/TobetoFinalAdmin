import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


export interface QuestionResponse extends SingleResponseModel{
    id: number;
    imageUrl: string | null;
    sentence: string;
 }
 
  export interface GetListQuestionResponse extends GetAllModel<QuestionResponse>{
 }
 
  export interface CreatedQuestionResponse extends CreatedResponseModel{
     id:GUID;
     name:string;
 }
 
  export interface UpdatedQuestionResponse extends UpdatedResponseModel{
    id:GUID;
    name:string;
 }
