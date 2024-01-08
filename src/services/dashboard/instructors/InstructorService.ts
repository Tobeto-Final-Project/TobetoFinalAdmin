import { CreateInstructorRequest, UpdateInstructorRequest } from "../../../models/requests/dashboard/instructors/InstructorRequests";
import { GetListInstructorResponse, InstructorResponse, CreatedInstructorResponse, UpdatedInstructorResponse } from "../../../models/responses/dashboard/instructors/InstructorResponses";
import { BaseService } from "../../BaseService";

 

 
class InstructorService 
    extends BaseService<
      GetListInstructorResponse,InstructorResponse,
      CreatedInstructorResponse,CreateInstructorRequest,
      UpdatedInstructorResponse,UpdateInstructorRequest
    >{
 
        constructor() {

           super("Instructors");

        }
    }

export default InstructorService;