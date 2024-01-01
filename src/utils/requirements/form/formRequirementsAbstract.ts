import { CreateRequestModel, CreatedResponseModel, GetAllModel, SingleResponseModel, UpdateRequestModel, UpdatedResponseModel } from "../../../models/abstracts/ResponseAbstracts";
import { AnyObject} from "yup";
import { BaseService } from "../../../services/BaseService";

export interface CreateInputTypes{name:string;label:string;type?: string;placeHolder?: string;value?:string;}
export interface UpdateInputTypes{name:string;label:string;type?: string;placeHolder?: string;value?:string;}
export interface CreateInitialValues extends CreateRequestModel{}
export interface UpdateInitialValues extends UpdateRequestModel{}
export interface createValidationSchema extends AnyObject {};
export interface updateValidationSchema extends AnyObject {};

export interface BaseAdminComponentRequirements{
    createInputTypes:CreateInputTypes[];
    updateInputTypes:UpdateInputTypes[];
    createInitialValues:CreateInitialValues;
    updateInitialValues:UpdateInitialValues;
    createValidationSchema:createValidationSchema;
    updateValidationSchema:updateValidationSchema;
    componentHeader:string;
    service?:BaseService<GetAllModel<SingleResponseModel>,SingleResponseModel,CreatedResponseModel,CreateRequestModel,UpdatedResponseModel,UpdateRequestModel>
}