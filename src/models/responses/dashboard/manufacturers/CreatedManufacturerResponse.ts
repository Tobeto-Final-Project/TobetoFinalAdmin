import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface CreatedManufacturerResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}