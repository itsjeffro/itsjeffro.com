import React from 'react';
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import DataGrid from "../../../../components/DataGrid/DataGrid";
import UsersApi from "../../../../services/api/UsersApi";

class UsersPage extends React.Component<any, any> {
  state = {
    users: {
      data: [],
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

  render() {
    const { users } = this.state;

    let columns = [
      { headerName: "Id", field: "id" },
      { headerName: "Email", field: "email" },
      { headerName: "Created at", field: "createdAt" },
    ];
    
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Users</h2>
                
                <DataGrid columns={ columns } rows={ users.data } />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UsersPage;
