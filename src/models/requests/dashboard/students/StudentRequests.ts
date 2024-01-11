
  import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

  export interface CreateStudentRequest extends CreateRequestModel{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
 }
 
  export interface UpdateStudentRequest extends UpdateRequestModel{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
 }
