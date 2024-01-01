type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface StudentEducationModel {
    Id: GUID;
    StudentId: GUID;
    EducationId:GUID; //extra
    EducationStatus: string;
    SchoolName: string;
    Branch: string;
    IsContinued: boolean;
    StartDate: Date;
    GraduationDate: Date;
}