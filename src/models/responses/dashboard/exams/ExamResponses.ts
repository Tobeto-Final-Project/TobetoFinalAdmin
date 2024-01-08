import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface ExamResponse extends SingleResponseModel{
   id:string;
   name:string; 
    isActive:boolean;
    examUrl:string;
}

export interface GetListExamResponse extends GetAllModel<ExamResponse>{
  
}

export interface CreatedExamResponse extends CreatedResponseModel{
    id:string;
    name:string; 
    isActive:boolean;
    examUrl:string;
}

export interface UpdatedExamResponse extends UpdatedResponseModel{
   id:string;
   name:string; 
   isActive:boolean;
   examUrl:string;

}