type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface StudentSkillModel{
    Id: GUID;
    StudentId: GUID;
    SkillId: GUID;
    SkillName: string;
}