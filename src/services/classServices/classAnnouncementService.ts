import axios from "axios";
import { ClassAnnouncementModel } from "../../models/responses/ClassResponses/ClassAnnouncementModel";
import { GetAllClassAnnouncementModel } from "../../models/responses/ClassResponses/getResponses/GetAllClassAnnouncementModel";


export type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}
class ClassAnnouncementService {
    apiUrl:string="";
    constructor() {
        this.apiUrl="http://localhost:60805/api/";
    }
	getAll(pageIndex:number,pageSize:number) {
		return axios.get<GetAllClassAnnouncementModel>(this.apiUrl+"SocialMedias?PageIndex=0&PageSize=10").catch((response)=>{

        });
	}

	getById(id: GUID) {
		return axios.get<ClassAnnouncementModel>(this.apiUrl+"SocialMedias/" + id);
	}
}

export default ClassAnnouncementService;

