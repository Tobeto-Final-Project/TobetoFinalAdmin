import { CreateTagRequest, UpdateTagRequest } from "../../../models/requests/dashboard/tags/TagRequests";
import { CreatedTagResponse, GetListTagResponse, TagResponse, UpdatedTagResponse } from "../../../models/responses/dashboard/tags/TagResponses";
import { BaseService } from "../../BaseService";


 
class TagService 
    extends BaseService<
      GetListTagResponse,TagResponse,
      CreatedTagResponse,CreateTagRequest,
      UpdatedTagResponse,UpdateTagRequest
    >{
 
        constructor() {

           super('Tags');

        }
    }

export default TagService;
