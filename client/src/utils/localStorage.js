export default class SessionStorage {

    static get() {
      let  token = localStorage.getItem("token");
      return token
    }

    static set(token){
        localStorage.setItem("token",token);
    } 

    static remove() {
      localStorage.removeItem("token");
    }

}