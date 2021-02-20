import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../../../components/AdminNavbar/AdminNavbar";
import UsersApi from "../../../../../../services/api/UsersApi";
import Container from "../../../../../../components/Container";
import Button from "../../../../../../components/Button";

class AddUserPage extends React.Component<any, any> {
  state = {
    userId: '',
    user: {
      id: '',
      name: '',
      email: '',
      password: '',
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
        const user = response.data.data;

        this.setState((prevState) => {
          return {
            userId: user.id,
            user: {
              ...prevState.user,
              name: user.name,
              email: user.email,
            }
          }
        });
      }, (error) => {
        //
      })
  }

  /**
   * Handle input change.
   */
  onInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    const user = {
      ...this.state.user,
      [name]: value,
    };
    
    this.setState({ user: user });
  }

  /**
   * Save user.
   */
  onSaveClick = (userId: string) => {
    const { user } = this.state;
    const usersApi = new UsersApi();
  
    usersApi.updateOne(userId, user)
      .then((response) => {
        //
      }, (error) => {
        //
      })
  };
  
  render() {
    const { userId, user } = this.state;
  
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <Container>
            <div className="row">

              <div className="col-lg-9">
                <div className="card mb-3">
                  <div className="card-header">
                    Edit User (<NavLink to="/users">Back to users</NavLink>)
                  </div>

                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
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
                      <label htmlFor="email">Email *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={ this.state.user.email }
                        onChange={ (event) => this.onInputChange(event) }
                      />
                    </div>

                    <h6>Change password</h6>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={ this.state.user.password }
                        onChange={ (event) => this.onInputChange(event) }
                      />
                  </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Button
                      variant="primary"
                      onClick={ () => this.onSaveClick(userId) }
                      isFluid
                    >Save</Button>
                  </li>
                </ul>
              </div>

            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AddUserPage;
