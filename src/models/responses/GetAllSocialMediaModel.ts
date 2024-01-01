
import { ResponseModel } from "./ResponseModel";
import { SocialMediaModel } from "./SocialMediaModel";

type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}
export interface GetAllSocialMediaModel {//extends GetAllModel
    responseModel:ResponseModel,
    items:SocialMediaModel[]
}