
type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface ClassSurveyModel {
     Id: GUID;
     StudentClassId: GUID;
     SurveyId: GUID;
     SurveyStartDate: Date;
     SurveyEndDate: Date;
     SurveyName: string;
     SurveyUrl: string;
     SurveyDescription: string;
}

