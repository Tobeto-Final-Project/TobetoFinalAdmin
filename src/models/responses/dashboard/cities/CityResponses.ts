import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface CityResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListCityResponse extends GetAllModel<CityResponse>{
}

 export interface CreatedCityResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedCityResponse extends UpdatedResponseModel{
   id:string;
   name:string;
}

