export interface RefreshTokenModel{
    UserId:number;
    token:string;
    Expires:Date;
    CreatedByIp:string;
    Revoked?:Date;
    RevokedByIp?:string;
    ReplacedByToken:string;
}