import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../../components/Navbar/Navbar";
import PostsApi from "../../services/api/PostsApi";
import Post from "./pages/HomePage/components/Post";
import UserApi from "../../services/api/UserApi";

class Root extends React.Component<any, any> {
  state = {
    isLoading: true,
    user: {},
    posts: {
      data: [],
    },
  };

  componentDidMount(): void {
    const postsApi = new PostsApi();
    const userApi = new UserApi();
    
    postsApi.getAll()
      .then((response) => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      }, (error) => {
        //
      });
  
    userApi.getUser()
      .then((response) => {
        this.setState({ user: response.data });
      }, (error) => {
        //
      });
  }
  
  render() {
    const { posts, isLoading } = this.state;
    
    return (
      <>
        <Navbar title={ "ItsJeffro.com" }>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/itsjeffro" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </Navbar>
      
        <div className="container-fluid">
          <div className="content">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                { isLoading ? <div className="flex-center">Loading posts ...</div> : ''}
      
                { !isLoading && posts.data.length === 0
                  ? <div className="flex-center">No posts at the moment.</div>
                  : '' }
      
                { !isLoading ? posts.data.map((post) => <Post key={ post.id } post={ post }/>) : '' }
              </div>
              <div className="col-lg-3">
                <h5>Tags</h5>
                
                No post tags available.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Root;

if (document.getElementById('app')) {
  ReactDOM.render(<Root />, document.getElementById('app'));
}
