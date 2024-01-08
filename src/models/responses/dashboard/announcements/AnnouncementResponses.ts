import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface AnnouncementResponse extends SingleResponseModel{
   id:string;
   name:string;
    description:string;
}

export interface GetListAnnouncementResponse extends GetAllModel<AnnouncementResponse>{
  
}

export interface CreatedAnnouncementResponse extends CreatedResponseModel{
    id:string;
    name:string;
    description:string;

}

export interface UpdatedAnnouncementResponse extends UpdatedResponseModel{
   id:string;
   name:string;
    description:string;

}