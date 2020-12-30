import BaseApi from "./BaseApi";

export default class PostsApi extends BaseApi {
  public getAll(page?: number) {
    page = page ? page : 1;
    
    return this.getRequest(`/api/posts?page=${ page }`);
  }
}
