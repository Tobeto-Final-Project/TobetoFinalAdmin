import { CreateSkillRequest, UpdateSkillRequest } from "../../../models/requests/dashboard/skills/SkillRequests";
import { GetListSkillResponse, SkillResponse, CreatedSkillResponse, UpdatedSkillResponse } from "../../../models/responses/dashboard/skills/SkillResponses";
import { BaseService } from "../../BaseService";

 
class SkillService 
    extends BaseService<
      GetListSkillResponse,SkillResponse,
      CreatedSkillResponse,CreateSkillRequest,
      UpdatedSkillResponse,UpdateSkillRequest
    >{
 
        constructor() {

           super("Skills");

        }
    }

export default SkillService;