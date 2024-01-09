import { CreateContentTagRequest, UpdateContentTagRequest } from "../../../models/requests/dashboard/contents/ContentRequests";
import { GetListContentTagResponse, ContentTagResponse, CreatedContentTagResponse, UpdatedContentTagResponse } from "../../../models/responses/dashboard/contents/ContentResponses";
import { BaseService } from "../../BaseService";

 
class ContentTagService 
    extends BaseService<
      GetListContentTagResponse,ContentTagResponse,
      CreatedContentTagResponse,CreateContentTagRequest,
      UpdatedContentTagResponse,UpdateContentTagRequest
    >{
 
        constructor() {

           super("ContentTags");

        }
    }

export default ContentTagService;