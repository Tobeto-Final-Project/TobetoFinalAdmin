
import axios, { AxiosResponse } from "axios";
import { BaseService } from "../BaseService";
import { AuthLoginRequest } from "../../models/requests/auth/AuthLoginRequest";
import { LoginResponseModel } from "../../models/responses/AuthResponses/LoginResponseModel";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";


class AuthLoginService {

	api_url: string = "";
	api_type: string = "";
	
	constructor() {
		
	}
	async login(data: AuthLoginRequest) {
		
	  await axios.post("http://localhost:60805/api/"+ "Auth/Login", data).then((response:AxiosResponse<LoginResponseModel>)=>{
		if (response.data.accessToken!=null) {
			const token = response.data.accessToken.token;
			localStorage.setItem("token",token);
			const dispatch = useDispatch();
			dispatch({ type: 'SET_TOKEN', payload: localStorage.getItem("token") });
			console.log(response);
			console.log(response.data);
			
		}	
	  }).catch((err)=>console.log(err)
	  );
	}

	
}

export default AuthLoginService;