import HttpService from "../HttpService";

export default class UsersAction {
  getList = () => {
    const http = new HttpService();
    let url = "users";
    return http.getData(url);
  };
}
