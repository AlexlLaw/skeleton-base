export class Util {

  static getUsuarioSession() {
    const user = localStorage.getItem('name');
    return user ? JSON.parse(atob(user)) : null;
  }

  static getRestrictionSession() {
    const restriction = localStorage.getItem('restricao');
    return restriction ? JSON.parse(atob(restriction)) : null;
  }
}
