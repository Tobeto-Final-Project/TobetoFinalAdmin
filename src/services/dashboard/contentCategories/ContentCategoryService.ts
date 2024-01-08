import { CreateContentCategoryRequest, UpdateContentCategoryRequest } from "../../../models/requests/dashboard/contentCategories/ContentCategoryRequests";
import { GetListContentCategoryResponse, ContentCategoryResponse, CreatedContentCategoryResponse, UpdatedContentCategoryResponse } from "../../../models/responses/dashboard/contentCategories/ContentCategoryResponses";
import { BaseService } from "../../BaseService";

 
class ContentCategoryService 
    extends BaseService<
      GetListContentCategoryResponse,ContentCategoryResponse,
      CreatedContentCategoryResponse,CreateContentCategoryRequest,
      UpdatedContentCategoryResponse,UpdateContentCategoryRequest
    >{
 
        constructor() {

           super("ContentCategories");

        }
    }

export default ContentCategoryService;