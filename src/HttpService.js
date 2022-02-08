export default class HttpService {
  url = "http://127.0.0.1:8000/api/";

  getData = (addedUrl) => {
    return fetch(this.url + addedUrl)
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  patchData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "PATCH",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  postData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  deleteData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "DELETE",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };
}
