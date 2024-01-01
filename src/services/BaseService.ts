import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllModel } from "../models/responses/Abstracts/ResponseAbstracts";
import ManufacturerService from "./dashboard/manufacturers/ManufacturerService";


export type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
  return guid as GUID;
}

export class BaseService<
  GetListModelResponse,SingleModelResponse,
  CreateModelResponse,CreateModelRequest,
  UpdateModelRequest,UpdateModelResponse
> {
  api_url: string = "";
  api_type: string = "";

  constructor(apiType: string) {

    this.api_url = "http://localhost:60805/api/";
    this.api_type = apiType;

  }
  async getAll(pageIndex: string, pageSize: string): Promise<AxiosResponse<GetListModelResponse, any>> {
    return axios.get<GetListModelResponse>(
      this.api_url +
      this.api_type +
      "?PageIndex=" +
      pageIndex +
      "&PageSize=" +
      pageSize
      , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
  }

  async getById(id: GUID): Promise<AxiosResponse<SingleModelResponse, any>> {
    return axios.get<SingleModelResponse>(
      this.api_url + this.api_type + "/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    );
  }
  async create(data: CreateModelRequest): Promise<AxiosResponse<CreateModelResponse, any>> {
    return axios.post(this.api_url + this.api_type, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    ;
  }
  async delete(id: GUID) {
    return axios.delete(this.api_url + this.api_type + "/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
  }
  async update(data: UpdateModelRequest): Promise<AxiosResponse<UpdateModelResponse, any>> {
    return axios.put(this.api_url + this.api_type, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
  } //classexam unutma
}
