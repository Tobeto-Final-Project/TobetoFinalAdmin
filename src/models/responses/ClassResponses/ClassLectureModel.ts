type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
export interface ClassLectureModel {
    Id: GUID;
    LectureId: GUID;
    StudentClassId: GUID;
    StudentClassName: string;
    LectureName: string;
    LectureCategoryName: string;
    LectureImageUrl: string;
    EstimatedVideoDuration: number;
    LectureManufacturerName: string;
    StartDate: Date;
    EndDate: Date;
}
