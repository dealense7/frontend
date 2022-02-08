import HttpService from "../HttpService";

export default class StatusAction {
  getList = () => {
    const http = new HttpService();
    let url = "statuses";
    return http.getData(url);
  };
}
