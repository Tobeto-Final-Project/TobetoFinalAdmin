import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface DistrictResponse extends SingleResponseModel{
   id:GUID;
   name:string;
   cityName:string;
   cityId:GUID;
}

 export interface GetListDistrictResponse extends GetAllModel<DistrictResponse>{
}

 export interface CreatedDistrictResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
    cityId:GUID;
}

 export interface UpdatedDistrictResponse extends UpdatedResponseModel{
   id:GUID|string;
   name:string;
   cityId:GUID;
}
