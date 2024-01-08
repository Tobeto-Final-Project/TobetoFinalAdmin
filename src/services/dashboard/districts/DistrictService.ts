import { CreateDistrictRequest, UpdateDistrictRequest } from "../../../models/requests/dashboard/districts/DistrictRequests";
import { CreatedDistrictResponse, DistrictResponse, GetListDistrictResponse, UpdatedDistrictResponse } from "../../../models/responses/dashboard/districts/DistrictResponses";
import { BaseService } from "../../BaseService";

 
class DistrictService 
    extends BaseService<
      GetListDistrictResponse,DistrictResponse,
      CreatedDistrictResponse,CreateDistrictRequest,
      UpdatedDistrictResponse,UpdateDistrictRequest
    >{
 
        constructor() {

           super("Districts");

        }
    }

export default DistrictService;