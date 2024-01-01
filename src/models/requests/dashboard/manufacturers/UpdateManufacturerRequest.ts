import { GUID } from "../../../../services/BaseService";
import { UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface UpdateManufacturerRequest extends UpdateRequestModel{
    name:string;
}