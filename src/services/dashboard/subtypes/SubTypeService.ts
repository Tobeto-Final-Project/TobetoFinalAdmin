import { CreateSubTypeRequest, UpdateSubTypeRequest } from "../../../models/requests/dashboard/subtypes/SubTypeRequests";
import { CreatedSubTypeResponse, GetListSubTypeResponse, SubTypeResponse, UpdatedSubTypeResponse } from "../../../models/responses/dashboard/subtypes/SubTypeResponses";
import { BaseService } from "../../BaseService";

 
class SubTypeService 
    extends BaseService<
      GetListSubTypeResponse,SubTypeResponse,
      CreatedSubTypeResponse,CreateSubTypeRequest,
      UpdatedSubTypeResponse,UpdateSubTypeRequest
    >{
 
        constructor() {

           super("SubTypes");

        }
    }

export default SubTypeService;