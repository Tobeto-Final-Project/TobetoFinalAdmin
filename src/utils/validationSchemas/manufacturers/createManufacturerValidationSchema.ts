import { object, string } from "yup";

export const createManufacturerValidationSchema = object({
    name: string().required("İsim Alanı Zorunludur*")
});