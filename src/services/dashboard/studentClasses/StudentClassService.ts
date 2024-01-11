import { CreateStudentClassRequest, UpdateStudentClassRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListStudentClassResponse, StudentClassResponse, CreatedStudentClassResponse, UpdatedStudentClassResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class StudentClassService 
    extends BaseService<
      GetListStudentClassResponse,StudentClassResponse,
      CreatedStudentClassResponse,CreateStudentClassRequest,
      UpdatedStudentClassResponse,UpdateStudentClassRequest
    >{
 
        constructor() {

           super("StudentClasses");

        }
    }

export default StudentClassService;