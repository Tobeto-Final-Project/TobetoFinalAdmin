import { CreateLectureCourseRequest, UpdateLectureCourseRequest } from "../../../models/requests/dashboard/lectures/LectureRequests";
import { GetListLectureCourseResponse, LectureCourseResponse, CreatedLectureCourseResponse, UpdatedLectureCourseResponse } from "../../../models/responses/dashboard/lectures/LectureResponses";
import { BaseService } from "../../BaseService";

 
class LectureCourseService 
    extends BaseService<
      GetListLectureCourseResponse,LectureCourseResponse,
      CreatedLectureCourseResponse,CreateLectureCourseRequest,
      UpdatedLectureCourseResponse,UpdateLectureCourseRequest
    >{
 
        constructor() {

           super("LectureCourses");

        }
    }

export default LectureCourseService;