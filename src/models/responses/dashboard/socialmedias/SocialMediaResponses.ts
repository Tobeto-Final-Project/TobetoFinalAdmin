import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface SocialMediaResponse extends SingleResponseModel{
   id:GUID;
   name:string;
   logoUrl:string;
}

export interface GetListSocialMediaResponse extends GetAllModel<SocialMediaResponse>{
  
}

export interface CreatedSocialMediaResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
    logoUrl:string;

}

export interface UpdatedSocialMediaResponse extends UpdatedResponseModel{
    id:GUID;
    name:string
    logoUrl:string;
}

