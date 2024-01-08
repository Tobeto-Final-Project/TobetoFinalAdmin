import { CreateCityRequest, UpdateCityRequest } from "../../../models/requests/dashboard/cities/CityRequests";
import { GetListCityResponse, CityResponse, CreatedCityResponse, UpdatedCityResponse } from "../../../models/responses/dashboard/cities/CityResponses";
import { BaseService } from "../../BaseService";

 
class CityService 
    extends BaseService<
      GetListCityResponse,CityResponse,
      CreatedCityResponse,CreateCityRequest,
      UpdatedCityResponse,UpdateCityRequest
    >{
 
        constructor() {

           super("Cities");

        }
    }

export default CityService;