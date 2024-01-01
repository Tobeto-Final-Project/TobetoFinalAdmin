import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel } from "../../Abstracts/ResponseAbstracts";

export interface CreatedManufacturerResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}