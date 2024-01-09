import { CreateCourseContentRequest, UpdateCourseContentRequest } from "../../../models/requests/dashboard/courses/CourseRequests";
import { GetListCourseContentResponse, CourseContentResponse, CreatedCourseContentResponse, UpdatedCourseContentResponse } from "../../../models/responses/dashboard/courses/CourseResponses";
import { BaseService } from "../../BaseService";

 
class CourseContentService 
    extends BaseService<
      GetListCourseContentResponse,CourseContentResponse,
      CreatedCourseContentResponse,CreateCourseContentRequest,
      UpdatedCourseContentResponse,UpdateCourseContentRequest
    >{
 
        constructor() {

           super("CourseContents");

        }
    }

export default CourseContentService;