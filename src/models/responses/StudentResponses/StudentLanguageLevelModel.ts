type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface StudentLanguageLevelModel {
    Id: GUID;
    LanguageId: GUID;
    LanguageLevelId: GUID;
    StudentId: GUID;
    LanguageLevelName: string;
    LanguageName: string;
}