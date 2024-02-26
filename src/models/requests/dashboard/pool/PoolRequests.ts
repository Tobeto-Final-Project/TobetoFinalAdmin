import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

 export interface CreatePoolRequest extends CreateRequestModel{
    name:string
}

 export interface UpdatePoolRequest extends UpdateRequestModel{
    name:string;
}
