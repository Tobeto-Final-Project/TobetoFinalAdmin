import { GUID } from "../../../../services/BaseService";
import { UpdateRequestModel } from "../../../responses/Abstracts/ResponseAbstracts";

export interface UpdateManufacturerRequest extends UpdateRequestModel{
    name:string;
}