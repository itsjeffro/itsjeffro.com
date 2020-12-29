import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar/Navbar";
import PostsApi from "../services/api/PostsApi";
import Post from "../pages/HomePage/components/Post";

class App extends React.Component<any, any> {
  state = {
    isLoading: true,
    posts: {
      data: [],
    },
  };

  componentDidMount(): void {
    const postsApi = new PostsApi();
    
    const posts = postsApi.getAll()
      .then((response) => {
        this.setState({
          posts: response.data,
          isLoading: false
        });
      }, (error) => {
        //
      });
  }
  
  render() {
    const { posts, isLoading } = this.state;
    
    return (
      <>
        <Navbar
          title={ "ItsJeffro.com" }
        />
      
        <div className="container">
          <div className="content">
            { isLoading ? <div className="flex-center">Loading posts ...</div> : ''}
            
            { !isLoading && posts.data.length === 0
              ? <div className="flex-center">No posts at the moment.</div>
              : '' }
            
            { !isLoading ? posts.data.map((post) => <Post key={ post.id } post={ post }/>) : '' }
          </div>
        </div>
      </>
    );
  }
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
