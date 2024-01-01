type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface StudentSocialMediaModel {
     Id: GUID;
     StudentId: GUID;
     SocialMediaId: GUID;
     SocialMediaName: string;
     MediaAccountUrl: string;
}
