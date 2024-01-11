import { CreateClassAnnouncementRequest, UpdateClassAnnouncementRequest } from "../../../models/requests/dashboard/studentClasses/StudentClassRequests";
import { GetListClassAnnouncementResponse, ClassAnnouncementResponse, CreatedClassAnnouncementResponse, UpdatedClassAnnouncementResponse } from "../../../models/responses/dashboard/studentClasses/StudentClassResponses";
import { BaseService } from "../../BaseService";

 
class ClassAnnouncementService 
    extends BaseService<
      GetListClassAnnouncementResponse,ClassAnnouncementResponse,
      CreatedClassAnnouncementResponse,CreateClassAnnouncementRequest,
      UpdatedClassAnnouncementResponse,UpdateClassAnnouncementRequest
    >{
 
        constructor() {

           super("ClassAnnouncements");

        }
    }

export default ClassAnnouncementService;