import BaseApi from "./BaseApi";

export default class PostsApi extends BaseApi {
  public getAll(page?: number) {
    page = page ? page : 1;
    
    return this.getRequest(`/api/posts?page=${ page }`);
  }
  
  public getOne(postId: string) {
    return this.getRequest(`/api/posts/${ postId }`);
  }
  
  public updateOne(postId: string, data: any) {
    return this.putRequest(`/api/posts/${ postId }`, data);
  }
  
  public createOne(postId: string, data: any) {
    return this.postRequest(`/api/posts`, data);
  }
  
  public deleteOne(postId: string) {
    return this.deleteRequest(`/api/posts/${ postId }`);
  }
}
