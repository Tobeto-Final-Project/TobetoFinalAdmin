import { CreatePoolRequest, UpdatePoolRequest } from "../../../models/requests/dashboard/pool/PoolRequests";
import { GetListPoolResponse, PoolResponse, CreatedPoolResponse, UpdatedPoolResponse } from "../../../models/responses/dashboard/pools/PoolsResponses";
import { BaseService } from "../../BaseService";

 
class PoolService 
    extends BaseService<
      GetListPoolResponse,PoolResponse,
      CreatedPoolResponse,CreatePoolRequest,
      UpdatedPoolResponse,UpdatePoolRequest
    >{
 
        constructor() {

           super("Pools");

        }
    }

export default PoolService;