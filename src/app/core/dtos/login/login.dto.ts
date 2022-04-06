export class LoginDto {
 public user: string;
 public password: string;

 constructor(object?: any) {
   this.user = object.user;
   this.password = object.password;
 }
}
