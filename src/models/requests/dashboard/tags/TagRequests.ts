import { CreateRequestModel} from '../../../abstracts/ResponseAbstracts';
 
import { UpdateRequestModel } from '../../../abstracts/ResponseAbstracts';
 export interface UpdateTagRequest extends UpdateRequestModel{
   name:string;
}

export interface CreateTagRequest extends CreateRequestModel{
    name:string; 
}