import { CreateClassQuizRequest, UpdateClassQuizRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassQuizResponse, ClassQuizResponse, CreatedClassQuizResponse, UpdatedClassQuizResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassQuizService 
    extends BaseService<
      GetListClassQuizResponse,ClassQuizResponse,
      CreatedClassQuizResponse,CreateClassQuizRequest,
      UpdatedClassQuizResponse,UpdateClassQuizRequest
    >{
 
        constructor() {

           super("ClassQuizs");

        }
    }

export default ClassQuizService;