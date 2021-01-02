import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../../../components/AdminNavbar/AdminNavbar";
import UsersApi from "../../../../../../services/api/UsersApi";

class AddUserPage extends React.Component<any, any> {
  state = {
    user: {
      id: '',
      name: '',
      email: '',
    },
  };
  
  componentDidMount(): void {
    const {
      match: {
        params: {
          userId,
        }
      }
    } = this.props;
    
    const usersApi = new UsersApi();
    
    usersApi.getOne(userId)
      .then((response) => {
        this.setState({ user: response.data.data });
      }, (error) => {
        //
      })
  }
  
  onInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    const post = {
      ...this.state.user,
      [name]: value,
    };
    
    this.setState({ post: post });
  }
  
  onSaveClick = (postId: string) => {
    const { user } = this.state;
    const usersApi = new UsersApi();
  
    usersApi.updateOne(postId, user)
      .then((response) => {
        //
      }, (error) => {
        //
      })
  };
  
  render() {
    const { user } = this.state;
  
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card mb-3">
                  <div className="card-header">
                    Edit User (<NavLink to="/users">Back to users</NavLink>)
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={ this.state.user.name }
                        onChange={ (event) => this.onInputChange(event) }
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={ this.state.user.email }
                        onChange={ (event) => this.onInputChange(event) }
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={ (event) => this.onSaveClick(user.id) }
                    >Save</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddUserPage;
