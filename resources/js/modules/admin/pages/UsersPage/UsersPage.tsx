import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import DataGrid from "../../../../components/DataGrid/DataGrid";
import UsersApi from "../../../../services/api/UsersApi";
import Pagination from "../../../../components/Pagination/Pagination";
import DateTime from "../../../../services/DateTime";

class UsersPage extends React.Component<any, any> {
  state = {
    users: {
      data: [],
      meta: {
        per_page: 1,
        current_page: 1,
        total: 0,
      }
    }
  };
  
  componentDidMount(): void {
    const usersApi = new UsersApi();
  
    usersApi.getAll()
      .then((response) => {
        this.setState({ users: response.data });
      }, (error) => {
        //
      });
  }
  
  private onPageClick = (event, page: number): void => {
    event.preventDefault();
    
    console.log(page);
  };
  
  private onTheadClick = (event: any, field: string) => {
    event.preventDefault();

    console.log(field);
  };

  render() {
    const { users } = this.state;

    let columns = [
      { headerName: "Id", field: "id" },
      { headerName: "Email", field: "email" },
      { headerName: "Created at", field: "createdAt" },
    ];
  
    let rows = users.data.map((user) => {
      const dateTime = new DateTime(user.createdAt);
    
      return {
        id: user.id,
        email: <NavLink to={ `/users/${ user.id }` }>{ user.email }</NavLink>,
        createdAt: <span title={ user.createdAt }>{ dateTime.format('d F, Y - h:i A') }</span>,
      };
    });
    
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <h2>Users</h2>
            
            <div className="row">
              <div className="col-lg-3">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action">Add user</a>
                  <a href="#" className="list-group-item list-group-item-action">Roles</a>
                  <a href="#" className="list-group-item list-group-item-action">Deleted</a>
                </div>
              </div>
  
              <div className="col-lg-9">
                <div className="mb-3">
                  <DataGrid
                    columns={ columns }
                    rows={ rows }
                    sortOptions={{ onTheadClick: this.onTheadClick }}
                  />
                </div>
                
                <Pagination
                  perPage={ users.meta.per_page }
                  currentPage={ users.meta.current_page }
                  onPageChangeClick={ this.onPageClick }
                  total={ users.meta.total }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UsersPage;
