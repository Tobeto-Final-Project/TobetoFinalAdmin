import { CreateCourseRequest, UpdateCourseRequest } from "../../../models/requests/dashboard/courses/CourseRequests";
import { GetListCourseResponse, CourseResponse, CreatedCourseResponse, UpdatedCourseResponse } from "../../../models/responses/dashboard/courses/CourseResponses";
import { BaseService } from "../../BaseService";

 
class CourseService 
    extends BaseService<
      GetListCourseResponse,CourseResponse,
      CreatedCourseResponse,CreateCourseRequest,
      UpdatedCourseResponse,UpdateCourseRequest
    >{
 
        constructor() {

           super("Courses");

        }
    }

export default CourseService;