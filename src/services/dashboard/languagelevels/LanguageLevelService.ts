import { CreateLanguageLevelRequest, UpdateLanguageLevelRequest } from "../../../models/requests/dashboard/languagelevels/LanguageLevelRequests";
import { GetListLanguageLevelResponse, LanguageLevelResponse, CreatedLanguageLevelResponse, UpdatedLanguageLevelResponse } from "../../../models/responses/dashboard/languagelevels/LanguageLevelResponses";
import { BaseService } from "../../BaseService";

 
class LanguageLevelService 
    extends BaseService<
      GetListLanguageLevelResponse,LanguageLevelResponse,
      CreatedLanguageLevelResponse,CreateLanguageLevelRequest,
      UpdatedLanguageLevelResponse,UpdateLanguageLevelRequest
    >{
 
        constructor() {

           super("LanguageLevels");

        }
    }

export default LanguageLevelService;