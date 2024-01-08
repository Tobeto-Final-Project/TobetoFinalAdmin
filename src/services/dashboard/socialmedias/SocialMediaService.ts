import { CreateSocialMediaRequest, UpdateSocialMediaRequest } from "../../../models/requests/dashboard/socialMedias/SocialMediaRequests";
import { GetListSocialMediaResponse, SocialMediaResponse, CreatedSocialMediaResponse, UpdatedSocialMediaResponse } from "../../../models/responses/dashboard/socialmedias/SocialMediaResponses";
import { BaseService } from "../../BaseService";

 
class SocialMediaService 
    extends BaseService<
      GetListSocialMediaResponse,SocialMediaResponse,
      CreatedSocialMediaResponse,CreateSocialMediaRequest,
      UpdatedSocialMediaResponse,UpdateSocialMediaRequest
    >{
 
        constructor() {

           super("SocialMedias");

        }
    }

export default SocialMediaService;