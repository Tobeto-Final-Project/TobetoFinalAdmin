import { object, string } from "yup";

export const updateManufacturerValidationSchema = object({
    name: string().required("İsim Alanı Zorunludur*")
});