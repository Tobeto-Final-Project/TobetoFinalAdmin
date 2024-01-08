import { CreateStageRequest, UpdateStageRequest } from "../../../models/requests/dashboard/stages/StageRequests";
import { GetListStageResponse, StageResponse, CreatedStageResponse, UpdatedStageResponse } from "../../../models/responses/dashboard/stages/StageResponses";
import { BaseService } from "../../BaseService";

 
class StageService 
    extends BaseService<
      GetListStageResponse,StageResponse,
      CreatedStageResponse,CreateStageRequest,
      UpdatedStageResponse,UpdateStageRequest
    >{
 
        constructor() {

           super("Stages");

        }
    }

export default StageService;