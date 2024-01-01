import { GUID } from "../../../../services/BaseService";
import { UpdatedResponseModel } from "../../Abstracts/ResponseAbstracts";

export interface UpdatedManufacturerResponse extends UpdatedResponseModel{
    id:GUID;
    Name:string;
}