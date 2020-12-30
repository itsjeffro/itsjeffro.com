import React from 'react';
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import DataGrid from "../../../../components/DataGrid/DataGrid";
import PostsApi from "../../../../services/api/PostsApi";
import Pagination from "../../../../components/Pagination/Pagination";

class PostsPage extends React.Component<any, any> {
  state = {
    posts: {
      data: [],
      meta: {
        per_page: 1,
        current_page: 1,
        total: 0,
      }
    }
  };
  
  componentDidMount(): void {
    this.getPostsByPage(1);
  }
  
  getPostsByPage = (page?: number): void => {
    const postsApi = new PostsApi();
    
    postsApi.getAll(page)
      .then((response) => {
        this.setState({ posts: response.data });
      }, (error) => {
        //
      });
  }
  
  onPageClick = (event, page) => {
    event.preventDefault();
    
    this.getPostsByPage(page);
  };
  
  render() {
    const { posts } = this.state;
    
    let columns = [
      { headerName: "Id", field: "id" },
      { headerName: "Title", field: "title" },
      { headerName: "Created at", field: "createdAt" },
    ];
  
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Posts</h2>
                
                <DataGrid columns={ columns } rows={ posts.data } />
                
                <Pagination
                  perPage={ posts.meta.per_page }
                  currentPage={ posts.meta.current_page }
                  onPageChangeClick={ this.onPageClick }
                  total={ posts.meta.total }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostsPage;
