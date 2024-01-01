import { ClassAnnouncementModel } from "../ClassAnnouncementModel";
import { ResponseModel } from "../../ResponseModel";


export interface GetAllClassAnnouncementModel{
    responseModel:ResponseModel;
    items:ClassAnnouncementModel[];
}