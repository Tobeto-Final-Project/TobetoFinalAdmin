import { CreateLanguageRequest, UpdateLanguageRequest } from "../../../models/requests/dashboard/languages/LanguageRequests";
import { GetListLanguageResponse, LanguageResponse, CreatedLanguageResponse, UpdatedLanguageResponse } from "../../../models/responses/dashboard/languages/LanguageResponses";
import { BaseService } from "../../BaseService";

 
class LanguageService 
    extends BaseService<
      GetListLanguageResponse,LanguageResponse,
      CreatedLanguageResponse,CreateLanguageRequest,
      UpdatedLanguageResponse,UpdateLanguageRequest
    >{
 
        constructor() {

           super("Languages");

        }
    }

export default LanguageService;