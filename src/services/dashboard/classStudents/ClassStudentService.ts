import { CreateClassStudentRequest, UpdateClassStudentRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassStudentResponse, ClassStudentResponse, CreatedClassStudentResponse, UpdatedClassStudentResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassStudentService 
    extends BaseService<
      GetListClassStudentResponse,ClassStudentResponse,
      CreatedClassStudentResponse,CreateClassStudentRequest,
      UpdatedClassStudentResponse,UpdateClassStudentRequest
    >{
 
        constructor() {

           super("ClassStudents");

        }
    }

export default ClassStudentService;