export class LoginDto {
 public login: string;
 public password: string;

 constructor(object?: any) {
   this.login = object.user;
   this.password = object.password;
 }
}
