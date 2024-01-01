import { CreateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface CreateManufacturerRequest extends CreateRequestModel{
    name:string;
}