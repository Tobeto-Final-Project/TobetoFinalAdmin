import { CreateClassSurveyRequest, UpdateClassSurveyRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassSurveyResponse, ClassSurveyResponse, CreatedClassSurveyResponse, UpdatedClassSurveyResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassSurveyService 
    extends BaseService<
      GetListClassSurveyResponse,ClassSurveyResponse,
      CreatedClassSurveyResponse,CreateClassSurveyRequest,
      UpdatedClassSurveyResponse,UpdateClassSurveyRequest
    >{
        constructor() {

           super("ClassSurveys");

        }
    }

export default ClassSurveyService;