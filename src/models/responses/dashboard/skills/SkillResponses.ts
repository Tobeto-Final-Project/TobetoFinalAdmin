import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface SkillResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

 export interface GetListSkillResponse extends GetAllModel<SkillResponse>{
}

 export interface CreatedSkillResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedSkillResponse extends UpdatedResponseModel{
   id:GUID;
   name:string;
}
