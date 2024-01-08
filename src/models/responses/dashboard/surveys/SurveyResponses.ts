import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface SurveyResponse extends SingleResponseModel{
    id:GUID;
    name: string;
    startDate: Date;
    endDate: Date;
    surveyUrl: string;
    description: string;
}

 export interface GetListSurveyResponse extends GetAllModel<SurveyResponse>{
  
}

 export interface CreatedSurveyResponse extends CreatedResponseModel{
    id:GUID;
    name: string;
    startDate: Date;
    endDate: Date;
    surveyUrl: string;
    description: string;

}

 export interface UpdatedSurveyResponse extends UpdatedResponseModel{
   id:GUID;
   name: string;
   startDate: Date;
   endDate: Date;
   surveyUrl: string;
   description: string;
}

