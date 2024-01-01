type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface ClassAnnouncementModel {
    id: GUID;
    announcementName: string;
    announcementDescription: string;
    announcementCreatedDate: Date;
}