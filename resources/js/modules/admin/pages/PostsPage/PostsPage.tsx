import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import DataGrid from "../../../../components/DataGrid/DataGrid";
import PostsApi from "../../../../services/api/PostsApi";
import Pagination from "../../../../components/Pagination/Pagination";
import DateTime from "../../../../services/DateTime";
import CheckBox from "../../../../services/state/CheckBox";

class PostsPage extends React.Component<any, any> {
  state = {
    posts: {
      data: [],
      meta: {
        per_page: 1,
        current_page: 1,
        total: 0,
      }
    },
    checkedRows: [],
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
  
  private onPageClick = (event, page: number): void => {
    event.preventDefault();
    
    this.getPostsByPage(page);
  };
  
  private onCheckboxClick = (event, rowIndexStart, rowIndexEnd) => {
    this.setState((prevState) => {
      const checkbox = new CheckBox(prevState);
      
      return {
        checkedRows: checkbox.checkedRows(rowIndexStart, rowIndexEnd),
      };
    });
  };
  
  private onTheadClick = (event: any, field: string) => {
    event.preventDefault();
    
    console.log(field);
  };
  
  private onActionDeleteClick = () => {
    console.log('delete selected', this.state.checkedRows);
  }
  
  render() {
    const { checkedRows, posts } = this.state;
    
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
            <h2>Posts</h2>
            
            <div className="row">
              <div className="col-lg-3">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">Add post</a>
                  <a href="#" className="list-group-item list-group-item-action">Deleted</a>
                </div>
              </div>
              
              <div className="col-lg-9">
                <div className="mb-3">
                  <DataGrid
                    columns={ columns }
                    rows={ this.getPostRows(posts) }
                    sortOptions={{
                      onTheadClick: this.onTheadClick,
                    }}
                    checkboxOptions={{
                      checkedRows: checkedRows,
                      onCheckboxClick: this.onCheckboxClick,
                      actions: [
                        { name: "Delete selected", onClick: this.onActionDeleteClick }
                      ]
                    }}
                  />
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
