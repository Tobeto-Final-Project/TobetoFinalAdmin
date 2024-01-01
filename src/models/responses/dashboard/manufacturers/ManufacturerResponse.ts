import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel } from "../../Abstracts/ResponseAbstracts";

export interface ManufacturerResponse extends SingleResponseModel{
    id:GUID;
    name:string;
}