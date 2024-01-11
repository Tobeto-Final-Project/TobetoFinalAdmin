import { CreateStudentRequest, UpdateStudentRequest } from "../../../models/requests/dashboard/students/StudentRequests";
import { GetListStudentResponse, StudentResponse, CreatedStudentResponse, UpdatedStudentResponse } from "../../../models/responses/dashboard/students/StudentResponses";
import { BaseService } from "../../BaseService";

 
class StudentService 
    extends BaseService<
      GetListStudentResponse,StudentResponse,
      CreatedStudentResponse,CreateStudentRequest,
      UpdatedStudentResponse,UpdateStudentRequest
    >{
 
        constructor() {

           super("Students");

        }
    }

export default StudentService;