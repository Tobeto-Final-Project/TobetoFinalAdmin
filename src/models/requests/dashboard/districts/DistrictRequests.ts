import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

 export interface CreateDistrictRequest extends CreateRequestModel{
    name:string;
    cityId:GUID |string;
}

 export interface UpdateDistrictRequest extends UpdateRequestModel{
    name:string;
    cityId:GUID|string;
}