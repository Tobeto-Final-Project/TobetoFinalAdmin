import { CreateClassExamRequest, UpdateClassExamRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassExamResponse, ClassExamResponse, CreatedClassExamResponse, UpdatedClassExamResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassExamService 
    extends BaseService<
      GetListClassExamResponse,ClassExamResponse,
      CreatedClassExamResponse,CreateClassExamRequest,
      UpdatedClassExamResponse,UpdateClassExamRequest
    >{
 
        constructor() {

           super("ClassExams");

        }
    }

export default ClassExamService;