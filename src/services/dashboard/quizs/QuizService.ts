import { CreateQuizRequest, UpdateQuizRequest } from "../../../models/requests/dashboard/quizs/QuizRequests";
import { GetListQuizResponse, QuizResponse, CreatedQuizResponse, UpdatedQuizResponse } from "../../../models/responses/dashboard/quizs/QuizResponses";
import { BaseService } from "../../BaseService";

 
class QuizService 
    extends BaseService<
      GetListQuizResponse,QuizResponse,
      CreatedQuizResponse,CreateQuizRequest,
      UpdatedQuizResponse,UpdateQuizRequest
    >{
 
        constructor() {

           super("Quizs");

        }
    }

export default QuizService;