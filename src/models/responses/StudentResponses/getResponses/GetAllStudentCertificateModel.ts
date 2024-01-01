import { ResponseModel } from "../../ResponseModel";
import { StudentCertificateModel } from "../StudentCertificateModel";


export interface GetAllStudentCertificateModel{
    responseModel:ResponseModel;
    items:StudentCertificateModel[];
}