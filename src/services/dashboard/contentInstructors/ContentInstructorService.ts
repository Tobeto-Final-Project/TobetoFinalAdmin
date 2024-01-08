import { CreateContentInstructorRequest, UpdateContentInstructorRequest } from "../../../models/requests/dashboard/contentInstructors/ContentInstructorRequests";
import { GetListContentInstructorResponse, ContentInstructorResponse, CreatedContentInstructorResponse, UpdatedContentInstructorResponse } from "../../../models/responses/dashboard/contentInstructors/ContentInstructorResponses";
import { BaseService } from "../../BaseService";

 
class ContentInstructorService 
    extends BaseService<
      GetListContentInstructorResponse,ContentInstructorResponse,
      CreatedContentInstructorResponse,CreateContentInstructorRequest,
      UpdatedContentInstructorResponse,UpdateContentInstructorRequest
    >{
 
        constructor() {

           super("ContentInstructors");

        }
    }

export default ContentInstructorService;