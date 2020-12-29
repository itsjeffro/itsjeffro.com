class BaseApi {
  private axios: any;
  
  constructor() {
    const axiosWindow: any = window;
    
    this.axios = axiosWindow.axios;
  }
  
  private config(): any {
    return {
      path: '',
      url: '',
    };
  }
  
  private getEndpoint(endpoint: string): string {
    let apiEndpoint = endpoint.replace(/\/+/, "");
    let path = this.config().path.replace(/\/+$/, "");
    
    if (path !== "") {
      path = "/" + this.config().path;
    }
    
    return this.config().url + path + "/" + apiEndpoint;
  }
  
  public getRequest(endpoint: string) {
    return this.axios.request({
      method: 'GET',
      url: this.getEndpoint(endpoint),
      responseType: 'json'
    });
  }
  
  public postRequest(endpoint: string, data?: object) {
    return this.axios.request({
      method: 'POST',
      url: this.getEndpoint(endpoint),
      responseType: 'json',
      data: data
    });
  }
  
  public deleteRequest(endpoint: string) {
    return this.axios.request({
      method: 'POST',
      url: this.getEndpoint(endpoint),
      data: {
        '_method' : 'DELETE'
      },
      responseType: 'json'
    });
  }
  
  public putRequest(endpoint: string, data?: object) {
    return this.axios.request({
      method: 'PUT',
      url: this.getEndpoint(endpoint),
      responseType: 'json',
      data: data,
    });
  }
}

export default BaseApi;