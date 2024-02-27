import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


export interface QuizResponse extends SingleResponseModel{
    id: number;
    name: string;
    description: string;
    duration: number;
 }
  export interface GetListQuizResponse extends GetAllModel<QuizResponse>{
 }
 
  export interface CreatedQuizResponse extends CreatedResponseModel{
     id:GUID;
     name:string;
 }
 
  export interface UpdatedQuizResponse extends UpdatedResponseModel{
    id:GUID;
    name:string;
 }
