import { toast } from "react-toastify";

export default class ExceptionService {
  showExceptionMessage(errorMessage: string) {
    let errorMessageP1 = errorMessage.split(":")[1].trim();
    let errorMessageP2 = errorMessageP1.split("   at ")[0].trim();
    let ErrorMessageP3 = errorMessageP2.slice(0, -4);
    toast(ErrorMessageP3)
    alert(ErrorMessageP3);
    return (ErrorMessageP3)
  }
  showValidationMessage(errorMessage: string): void {

    toast(errorMessage);
  }

}