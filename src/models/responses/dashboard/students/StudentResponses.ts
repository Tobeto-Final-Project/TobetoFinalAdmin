import { GUID } from "../../../../services/BaseService";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../../../abstracts/ResponseAbstracts";
import { LanguageLevelResponse } from "../languagelevels/LanguageLevelResponses";
import { SkillResponse } from "../skills/SkillResponses";
import { SocialMediaResponse } from "../socialmedias/SocialMediaResponses";
import { StudentClassResponse } from "../studentClasses/StudentClassResponses";


export interface StudentResponse extends SingleResponseModel {
    id: GUID | string;
    lastName: string;
    firstName: string;
    email: string;
    cityName: string;
    districtName: string;
    nationalIdentity: string;
    phone: string;
    birthDate: string;
    adrressDetail: string;
    description: string;
    country: string;
    socialMedias: SocialMediaResponse[] | null;
    certificates: null;//GetListCertificateListItemDto[] |
    languageLevels: LanguageLevelResponse[] | null;
    skills: SkillResponse[] | null;
    appeals: null;//GetListAppealListItemDto[] |
    studentEducations: null;//GetListStudentEducationListItemDto[] | 
    studentExperiences: null;//GetListStudentExperienceListItemDto[] |
    studentClasses: StudentClassResponse[] | null;
}

export interface GetListStudentResponse extends GetAllModel<StudentResponse> {
}

export interface CreatedStudentResponse extends CreatedResponseModel {

}

export interface UpdatedStudentResponse extends UpdatedResponseModel {

}
