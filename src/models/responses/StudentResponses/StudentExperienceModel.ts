type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface StudentExperienceModel{
    Id: GUID;
    StudentId: GUID;
    ExperienceId:GUID; //new
    CompanyName: string;
    Sector: string;
    Position: string;
    StartDate: Date;
    EndDate: Date;
    Description: string;
    CityName: string;
}

