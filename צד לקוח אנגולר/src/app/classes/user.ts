export class user
{
    constructor(public UserCode:number=0, public Name:string="", public Family:string="", public Phone:string="",
         public Email:string="", public LoginPassword:string="", public FirstAidCertificate?:Boolean)
    {}
}