import { GUID } from "../../../../services/BaseService";
import { CreateRequestModel, UpdateRequestModel } from "../../../abstracts/ResponseAbstracts";

export interface CreateStudentClassRequest extends CreateRequestModel{
    name:string
}
export interface UpdateStudentClassRequest extends UpdateRequestModel{
    name:string
}

export interface CreateClassExamRequest extends CreateRequestModel{
    studentClassId:GUID|string;
    examId:GUID|string;
}

export interface UpdateClassExamRequest extends UpdateRequestModel{
    studentClassId:GUID|string;
    examId:GUID|string;
}

export interface CreateClassStudentRequest extends CreateRequestModel{
    studentClassId:GUID|string;
    studentId:GUID|string;
}
export interface UpdateClassStudentRequest extends UpdateRequestModel{
    studentClassId:GUID|string;
    studentId:GUID|string;
}

export interface CreateClassAnnouncementRequest extends CreateRequestModel{
    studentClassId:GUID|string;
    announcementId:GUID|string;
}
export interface UpdateClassAnnouncementRequest extends UpdateRequestModel{
    studentClassId:GUID|string;
    announcementId:GUID|string;
}export interface CreateClassSurveyRequest extends CreateRequestModel{
    studentClassId:GUID|string;
    surveyId:GUID|string;
}
export interface UpdateClassSurveyRequest extends UpdateRequestModel{
    studentClassId:GUID|string;
    surveyId:GUID|string;
}export interface CreateClassLectureRequest extends CreateRequestModel{
    studentClassId:GUID|string;
    lectureId:GUID|string;
}
export interface UpdateClassLectureRequest extends UpdateRequestModel{
    studentClassId:GUID|string;
    lectureId:GUID|string;
}