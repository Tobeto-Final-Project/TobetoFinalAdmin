import { GUID } from "../../../../services/BaseService";
import { SingleResponseModel } from "../../../abstracts/ResponseAbstracts";

export interface ManufacturerResponse extends SingleResponseModel{
    id:GUID;
    name:string;
}