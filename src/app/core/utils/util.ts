export class Util {

  static getUsuarioSession(): any {
    const user = localStorage.getItem('name');
    return user ? JSON.parse(atob(user)) : null;
  }

  static getRestrictionSession(): any {
    const restriction = localStorage.getItem('restricao');
    return restriction ? JSON.parse(atob(restriction)) : null;
  }

  static getIdUserSession(): any {
    const userId = localStorage.getItem('userId');
    return userId ? JSON.parse(atob(userId)) : null;
  }
}
