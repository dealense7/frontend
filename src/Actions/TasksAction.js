import HttpService from "../HttpService";

export default class TasksAction {
  getItem = (id) => {
    const http = new HttpService();
    let url = "tasks/" + id;
    return http.getData(url);
  };

  updateItem = (id, props) => {
    const http = new HttpService();
    let url = "tasks/" + id;
    return http.patchData(url, props);
  };

  createItem = (props) => {
    const http = new HttpService();
    let url = "tasks";
    return http.postData(url, props);
  };

  changeStatus = (id) => {
    const http = new HttpService();
    let url = "tasks/change-status/" + id;
    return http.patchData(url);
  };

  deleteItem = (id) => {
    const http = new HttpService();
    let url = "tasks/" + id;
    return http.deleteData(url);
  };

  detachUser = (taskId, userId) => {
    const http = new HttpService();
    var data = {
      userId: userId,
    };
    let url = "tasks/users/detach/" + taskId;
    return http.patchData(url, data);
  };

  attachUser = (taskId, userId) => {
    const http = new HttpService();
    var data = {
      userId: userId,
    };
    let url = "tasks/users/attach/" + taskId;
    return http.patchData(url, data);
  };
}
