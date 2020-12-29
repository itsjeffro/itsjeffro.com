import BaseApi from "./BaseApi";

export default class PostsApi extends BaseApi {
  public getAll() {
    return this.getRequest('/admin/posts');
  }
}
