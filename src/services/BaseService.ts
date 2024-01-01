import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import ManufacturerService from "./dashboard/manufacturers/ManufacturerService";
import { SingleResponseModel,GetAllModel,CreatedResponseModel,CreateRequestModel,UpdateRequestModel,UpdatedResponseModel } from "../models/abstracts/ResponseAbstracts";


export type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
  return guid as GUID;
}

export class BaseService<
  GetAll,SingleResponseModel,
  CreatedResponseModel,CreateRequestModel,
  UpdateRequestModel,UpdatedResponseModel
> {
  api_url: string = "";
  api_type: string = "";

  constructor(apiType: string) {

    this.api_url = "http://localhost:60805/api/";
    this.api_type = apiType;

  }
  async getAll(pageIndex: string, pageSize: string): Promise<AxiosResponse<GetAllModel<SingleResponseModel>, any>> {
    return axios.get<GetAllModel<SingleResponseModel>>(
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

  async getById(id: GUID): Promise<AxiosResponse<SingleResponseModel, any>> {
    return axios.get<SingleResponseModel>(
      this.api_url + this.api_type + "/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    );
  }
  async create(data: CreateRequestModel): Promise<AxiosResponse<CreatedResponseModel, any>> {
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
  async update(data: UpdateRequestModel): Promise<AxiosResponse<UpdatedResponseModel, any>> {
    return axios.put(this.api_url + this.api_type, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
  } //classexam unutma
}
