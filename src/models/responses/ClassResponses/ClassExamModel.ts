type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface ClassExamModel{
    Id: GUID;
    ExamId: GUID;
    StudentClassId: GUID;
    ExamName: string;
    ExamIsActive: boolean;
    ExamExamUrl: string;
    StudentClassName: string;
}
