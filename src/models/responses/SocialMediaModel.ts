type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface SocialMediaModel {
    id: GUID;
    name: string;
    logoUrl: string;

}