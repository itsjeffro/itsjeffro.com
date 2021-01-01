import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import DataGrid from "../../../../components/DataGrid/DataGrid";
import PostsApi from "../../../../services/api/PostsApi";
import Pagination from "../../../../components/Pagination/Pagination";
import DateTime from "../../../../services/DateTime";

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
  
  private getPostsByPage = (page?: number): void => {
    const postsApi = new PostsApi();
    
    postsApi.getAll(page)
      .then((response) => {
        this.setState({ posts: response.data });
      }, (error) => {
        //
      });
  };
  
  private onPageClick = (event, page: number): void => {
    event.preventDefault();
    
    this.getPostsByPage(page);
  };
  
  private getPostRows = (posts: any): any[] => {
    return posts.data.map((post) => {
      const dateTime = new DateTime(post.updatedAt);
  
      return {
        id: post.id,
        title: <NavLink to={ `/posts/${ post.id }` }>{ post.title }</NavLink>,
        updatedAt: <span title={ post.updatedAt }>{ dateTime.format('d F, Y - h:i A') }</span>,
      };
    })
  };
  
  render() {
    const { posts } = this.state;
    
    let columns = [
      { headerName: "Id", field: "id" },
      { headerName: "Title", field: "title" },
      { headerName: "Updated at", field: "updatedAt" },
    ];
  
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">Add post</a>
                  <a href="#" className="list-group-item list-group-item-action">Deleted</a>
                </div>
              </div>
              
              <div className="col-lg-9">
                <div className="card mb-3">
                  <div className="card-header">
                    Posts
                  </div>
                  <DataGrid columns={ columns } rows={ this.getPostRows(posts) } />
                </div>
                
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
