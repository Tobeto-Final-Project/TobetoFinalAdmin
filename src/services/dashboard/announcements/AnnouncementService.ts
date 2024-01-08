import { CreateAnnouncementRequest, UpdateAnnouncementRequest } from "../../../models/requests/dashboard/announcements/AnnouncementRequests";
import { GetListAnnouncementResponse, AnnouncementResponse, CreatedAnnouncementResponse, UpdatedAnnouncementResponse } from "../../../models/responses/dashboard/announcements/AnnouncementResponses";
import { BaseService } from "../../BaseService";

 
class AnnouncementService 
    extends BaseService<
      GetListAnnouncementResponse,AnnouncementResponse,
      CreatedAnnouncementResponse,CreateAnnouncementRequest,
      UpdatedAnnouncementResponse,UpdateAnnouncementRequest
    >{
 
        constructor() {

           super("Announcements");

        }
    }

export default AnnouncementService;