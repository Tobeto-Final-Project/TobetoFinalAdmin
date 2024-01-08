import { CreateExamRequest, UpdateExamRequest } from "../../../models/requests/dashboard/exams/ExamRequests";
import { CreatedExamResponse, ExamResponse, GetListExamResponse, UpdatedExamResponse } from "../../../models/responses/dashboard/exams/ExamResponses";
import { BaseService } from "../../BaseService";

 
class ExamService 
    extends BaseService<
      GetListExamResponse,ExamResponse,
      CreatedExamResponse,CreateExamRequest,
      UpdatedExamResponse,UpdateExamRequest
    >{
 
        constructor() {

           super("Exams");

        }
    }

export default ExamService;