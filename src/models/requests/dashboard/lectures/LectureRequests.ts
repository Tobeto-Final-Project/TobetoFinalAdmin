import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface  CreateLectureRequest extends CreateRequestModel{
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
  }

  export interface  UpdateLectureRequest extends UpdateRequestModel{
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
  }
  
  export interface  CreateLectureCourseRequest extends CreateRequestModel{
    courseId:GUID|string;
    lectureId:GUID|string;
  }

  export interface  UpdateLectureCourseRequest extends UpdateRequestModel{
    courseId:GUID|string;
    lectureId:GUID|string;
  }
  
  