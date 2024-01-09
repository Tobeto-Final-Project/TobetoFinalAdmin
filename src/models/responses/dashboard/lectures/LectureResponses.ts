import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { CourseResponse } from "../courses/CourseResponses";


 export interface LectureResponse extends SingleResponseModel{
    id: GUID;
    name: string;
    categoryName: string;
    imageUrl: string;
    estimatedVideoDuration: number;
    manufacturerName: string;
    startDate: Date;
    endDate: Date;
    courses?: CourseResponse[];
}

 export interface GetListLectureResponse extends GetAllModel<LectureResponse>{
}

 export interface CreatedLectureResponse extends CreatedResponseModel{
    id:GUID|string;
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
}

 export interface UpdatedLectureResponse extends UpdatedResponseModel{
    id:GUID|string;
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
}

export interface LectureCourseResponse extends SingleResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
   
}

 export interface GetListLectureCourseResponse extends GetAllModel<LectureResponse>{
}

 export interface CreatedLectureCourseResponse extends CreatedResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
}

 export interface UpdatedLectureCourseResponse extends UpdatedResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
}
