import { CreateClassLectureRequest, UpdateClassLectureRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassLectureResponse, ClassLectureResponse, CreatedClassLectureResponse, UpdatedClassLectureResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassLectureService 
    extends BaseService<
      GetListClassLectureResponse,ClassLectureResponse,
      CreatedClassLectureResponse,CreateClassLectureRequest,
      UpdatedClassLectureResponse,UpdateClassLectureRequest
    >{
 
        constructor() {

           super("ClassLectures");

        }
    }

export default ClassLectureService;