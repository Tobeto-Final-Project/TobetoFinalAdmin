import { CreateSurveyRequest, UpdateSurveyRequest } from "../../../models/requests/dashboard/surveys/SurveyRequests";
import { CreatedSurveyResponse, GetListSurveyResponse, SurveyResponse, UpdatedSurveyResponse } from "../../../models/responses/dashboard/surveys/SurveyResponses";
import { BaseService } from "../../BaseService";

 
class SurveyService 
    extends BaseService<
      GetListSurveyResponse,SurveyResponse,
      CreatedSurveyResponse,CreateSurveyRequest,
      UpdatedSurveyResponse,UpdateSurveyRequest
    >{
 
        constructor() {

           super("Surveys");

        }
    }

export default SurveyService;