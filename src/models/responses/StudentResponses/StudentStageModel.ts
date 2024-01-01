type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface StudentStageModel {
    Id: string;
    StageId: string;
    StudentId: string;
    StageDescription: string;
}