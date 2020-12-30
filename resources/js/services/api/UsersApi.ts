import BaseApi from "./BaseApi";

export default class UsersApi extends BaseApi {
  public getAll() {
    return this.getRequest('/api/users');
  }
}
