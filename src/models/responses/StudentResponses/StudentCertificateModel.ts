type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}

export interface StudentCertificateModel {
    Id: GUID;
    StudentId: GUID;
    CertificateId: GUID;
    CertificateImageUrl: string;
  }
  