import BaseApi from "./BaseApi";

export default class UserApi extends BaseApi {
  public getUser() {
    return this.getRequest('/api/user');
  }
}
