import { CreateRequestModel } from "../../../responses/Abstracts/ResponseAbstracts";

export interface CreateManufacturerRequest extends CreateRequestModel{
    name:string;
}