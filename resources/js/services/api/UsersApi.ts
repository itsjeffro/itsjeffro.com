import BaseApi from "./BaseApi";

export default class UsersApi extends BaseApi {
  public getAll() {
    return this.getRequest('/api/users');
  }
  
  public getOne(userId: string) {
    return this.getRequest(`/api/users/${ userId }`);
  }
  
  public updateOne(userId: string, data: any) {
    return this.putRequest(`/api/users/${ userId }`, data);
  }
}
