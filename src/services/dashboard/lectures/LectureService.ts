import { CreateLectureRequest, UpdateLectureRequest } from "../../../models/requests/dashboard/lectures/LectureRequests";
import { GetListLectureResponse, LectureResponse, CreatedLectureResponse, UpdatedLectureResponse } from "../../../models/responses/dashboard/lectures/LectureResponses";
import { BaseService } from "../../BaseService";

 
class LectureService 
    extends BaseService<
      GetListLectureResponse,LectureResponse,
      CreatedLectureResponse,CreateLectureRequest,
      UpdatedLectureResponse,UpdateLectureRequest
    >{
 
        constructor() {

           super("Lectures");

        }
    }

export default LectureService;