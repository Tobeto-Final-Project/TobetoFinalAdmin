import axios, { AxiosResponse } from "axios";
import { CreateOptionRequest, CreatePoolQuestionRequest, CreateQuestionRequest, UpdateQuestionRequest } from "../../../models/requests/dashboard/questions/QuestionRequests";
import { GetListQuestionResponse, QuestionResponse, CreatedQuestionResponse, UpdatedQuestionResponse } from "../../../models/responses/dashboard/questions/QuestionResponses";
import { BaseService } from "../../BaseService";

class QuestionService 
    extends BaseService<
      GetListQuestionResponse,QuestionResponse,
      CreatedQuestionResponse,CreateQuestionRequest,
      UpdatedQuestionResponse,UpdateQuestionRequest
    >{
 
        constructor() {

           super("Questions");

        }
    async addOption(data: CreateOptionRequest): Promise<AxiosResponse<any, any>> {
          return axios.post("https://tobeto.azurewebsites.net/api/" + "Options", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          })
          ;
        }
        async createPoolQuestion(data: CreatePoolQuestionRequest): Promise<AxiosResponse<any, any>> {
          return axios.post("https://tobeto.azurewebsites.net/api/" + "PoolQuestions",data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          })
          ;
        }
}

export default QuestionService;