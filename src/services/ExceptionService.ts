import { toast } from "react-toastify";

export default class  ExceptionService{
	showExceptionMessage(errorMessage:string){
        const colonIndex = errorMessage.indexOf(":");
          if (colonIndex !== -1) {
            const nextLineIndex = errorMessage.indexOf("\n", colonIndex);
            if (nextLineIndex !== -1) {
              const specificErrorMessage = errorMessage
                .substring(colonIndex + 1, nextLineIndex)
                .trim();
                toast(errorMessage)
            }
          }
    }
    showValidationMessage(errorMessage:string):void{
      
      toast(errorMessage);
  }
	
}