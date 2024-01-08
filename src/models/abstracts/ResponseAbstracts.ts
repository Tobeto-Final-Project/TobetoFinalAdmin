import { GUID } from "../../services/BaseService";
import { ResponseModel } from "../responses/ResponseModel";
export  interface CreatedResponseModel{}
export  interface GetAllModel<SingleResponseModel>{ responseModel:ResponseModel;items:SingleResponseModel[]}
export  interface SingleResponseModel{}

export  interface CreateRequestModel{}
export  interface UpdateRequestModel{id:GUID|number|string|any}
export  interface UpdatedResponseModel{}
