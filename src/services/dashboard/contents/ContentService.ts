import { CreateContentRequest, UpdateContentRequest } from "../../../models/requests/dashboard/contents/ContentRequests";
import { GetListContentResponse, ContentResponse, CreatedContentResponse, UpdatedContentResponse } from "../../../models/responses/dashboard/contents/ContentResponses";
import { BaseService } from "../../BaseService";

 
class ContentService 
    extends BaseService<
      GetListContentResponse,ContentResponse,
      CreatedContentResponse,CreateContentRequest,
      UpdatedContentResponse,UpdateContentRequest
    >{
 
        constructor() {

           super("Contents");

        }
    }

export default ContentService;