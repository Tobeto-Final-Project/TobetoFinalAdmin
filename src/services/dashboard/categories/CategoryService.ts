import { CreateCategoryRequest, UpdateCategoryRequest } from "../../../models/requests/dashboard/categories/CategoryRequests";
import { GetListCategoryResponse, CategoryResponse, CreatedCategoryResponse, UpdatedCategoryResponse } from "../../../models/responses/dashboard/categories/CategoryResponses";
import { BaseService } from "../../BaseService";

 
class CategoryService 
    extends BaseService<
      GetListCategoryResponse,CategoryResponse,
      CreatedCategoryResponse,CreateCategoryRequest,
      UpdatedCategoryResponse,UpdateCategoryRequest
    >{
 
        constructor() {

           super("Categories");

        }
    }

export default CategoryService;