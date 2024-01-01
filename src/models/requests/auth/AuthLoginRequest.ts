export interface AuthLoginRequest{
    Email:string;
    Password:string;
    AuthenticatorCode?:string;
}