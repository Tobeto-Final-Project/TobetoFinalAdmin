import { GUID } from "../../../services/BaseService";
import { ResponseModel } from "../ResponseModel";

export  interface GetAllModel<SingleResponseModel>{ responseModel:ResponseModel;items:SingleResponseModel[]}
export  interface SingleResponseModel{}
export  interface CreatedResponseModel{}
export  interface CreateRequestModel{}
export  interface UpdateRequestModel{id:GUID|number|string;}
export  interface UpdatedResponseModel{}
