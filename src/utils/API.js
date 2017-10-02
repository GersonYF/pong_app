import APIRoutes from "./APIRoutes";

export default class API {
  static home() {
    return APIRoutes.ROOT;
  }

  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      dataType: "json"
    };
  }

  static get(route, token) {
    return this.xhr(route, null, "GET", token);
  }

  static put(route, params, token) {
    return this.xhr(route, params, "PUT", token);
  }

  static post(route, params, token) {
    return this.xhr(route, params, "POST", token);
  }

  static delete(route, params, token) {
    return this.xhr(route, params, "DELETE", token);
  }

  static xhr(route, params, verb, token) {
    const host = this.home();
    const url = `${host}${route}`;
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null
    );
    options.headers = this.headers();
    if (token) {
      options.headers["Authorization"] = "Token " + token;
    }

    return fetch(url, options)
      .then(resp => {
        let json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then(err => {
          console.log(err);
          throw err;
        });
      })
      .then(json => json);
  }
}
