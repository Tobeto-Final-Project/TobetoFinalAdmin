import { GUID } from "../../../../services/BaseService";
import { UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface UpdatedManufacturerResponse extends UpdatedResponseModel{
    id:GUID;
    Name:string;
}