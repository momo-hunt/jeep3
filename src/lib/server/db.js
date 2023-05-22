import { PUBLIC_DB_URL } from "$env/static/public";

class DB {
  constructor(_token) {
    this.token = _token;
    this.req = {};
    this.time = new Date().getTime().toString();
  }

  readAll = async (opt) => {
    this.req = { ...this.req, ...opt, method: "readAll" };
    return await this.fetchData();
  };

  read = async (id) => {
    this.req = { ...this.req, id, method: "read" };
    return await this.fetchData();
  };
  create = async (body) => {
    this.req = { ...this.req, body, method: "create" };
    return await this.fetchData();
  };
  update = async (id, body) => {
    this.req = { ...this.req, id, body, method: "update" };
    return await this.fetchData();
  };
  delete = async (id) => {
    this.req = { ...this.req, id, method: "delete" };
    return await this.fetchData();
  };

  collection = (collection) => {
    this.req = { collection };
    return this;
  };
  //

  login = async (username) => {
    this.req = { ...this.req, username, auth: "login" };
    return await this.fetchData();
  };
  setToken = async (id, username) => {
    this.req = { ...this.req, id, username, auth: "setToken" };
    return await this.fetchData();
  };
  logout = async (id) => {
    this.req = { ...this.req, id, auth: "logout" };
    return await this.fetchData();
  };

  //

  fetchData = async () => {
    this.req.token = this.token;
    console.log("req->", this.req);
    const res = await fetch(
      PUBLIC_DB_URL + "?q=" + JSON.stringify(this.req) + "&time=" + this.time
    );
    const respon = res.ok ? await res.json() : {};
    return respon;
  };
}

export default DB;
