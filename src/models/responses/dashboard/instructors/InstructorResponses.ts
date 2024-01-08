import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";


 export interface InstructorResponse extends SingleResponseModel{
   id:GUID;
   firstName:string;
   lastName:string;
}

 export interface GetListInstructorResponse extends GetAllModel<InstructorResponse>{
}

 export interface CreatedInstructorResponse extends CreatedResponseModel{
    id:GUID;
    firstName:string;
   lastName:string;
}

 export interface UpdatedInstructorResponse extends UpdatedResponseModel{
   id:string;
   firstName:string;
   lastName:string;
}
