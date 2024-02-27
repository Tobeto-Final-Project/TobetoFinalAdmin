import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { AnnouncementResponse } from "../announcements/AnnouncementResponses";
import { ExamResponse } from "../exams/ExamResponses";
import { LectureResponse } from "../lectures/LectureResponses";
import { StudentResponse } from "../students/StudentResponses";
import { SurveyResponse } from "../surveys/SurveyResponses";

export interface StudentClassResponse extends SingleResponseModel{
    id: string;
    name: string;
    exams?: ExamResponse[];
    students?: StudentResponse[];
    announcements?: AnnouncementResponse[];
    surveys?: SurveyResponse[];
    lectures?: LectureResponse[];
} 
export interface GetListStudentClassResponse extends GetAllModel<StudentClassResponse>{}
export interface CreatedStudentClassResponse extends CreatedResponseModel{}
export interface UpdatedStudentClassResponse extends UpdatedResponseModel{}

//CLASS EXAMS
export interface ClassExamResponse extends SingleResponseModel{}
export interface GetListClassExamResponse extends GetAllModel<ClassExamResponse>{}
export interface CreatedClassExamResponse extends CreatedResponseModel{}
export interface UpdatedClassExamResponse extends UpdatedResponseModel{}
//Class Quizs
export interface ClassQuizResponse extends SingleResponseModel{}
export interface GetListClassQuizResponse extends GetAllModel<ClassQuizResponse>{}
export interface CreatedClassQuizResponse extends CreatedResponseModel{}
export interface UpdatedClassQuizResponse extends UpdatedResponseModel{}
//Class Students
export interface ClassStudentResponse extends SingleResponseModel{}
export interface GetListClassStudentResponse extends GetAllModel<ClassStudentResponse>{}
export interface CreatedClassStudentResponse extends CreatedResponseModel{}
export interface UpdatedClassStudentResponse extends UpdatedResponseModel{}
//ClassAnnouncement
export interface ClassAnnouncementResponse extends SingleResponseModel{}
export interface GetListClassAnnouncementResponse extends GetAllModel<ClassAnnouncementResponse>{}
export interface CreatedClassAnnouncementResponse extends CreatedResponseModel{}
export interface UpdatedClassAnnouncementResponse extends UpdatedResponseModel{}
//ClassSurvey
export interface ClassSurveyResponse extends SingleResponseModel{}
export interface GetListClassSurveyResponse extends GetAllModel<ClassSurveyResponse>{}
export interface CreatedClassSurveyResponse extends CreatedResponseModel{}
export interface UpdatedClassSurveyResponse extends UpdatedResponseModel{}
//ClassLecture
export interface ClassLectureResponse extends SingleResponseModel{}
export interface GetListClassLectureResponse extends GetAllModel<ClassLectureResponse>{}
export interface CreatedClassLectureResponse extends CreatedResponseModel{}
export interface UpdatedClassLectureResponse extends UpdatedResponseModel{}