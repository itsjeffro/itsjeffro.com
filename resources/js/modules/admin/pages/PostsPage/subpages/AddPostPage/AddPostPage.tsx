import React from 'react';
import { NavLink } from "react-router-dom";
import AdminNavbar from "../../../../components/AdminNavbar/AdminNavbar";
import PostsApi from "../../../../../../services/api/PostsApi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class AddPostPage extends React.Component<any, any> {
  state = {
    post: {
      title: '',
      content: '',
      author: {
        name: '',
      }
    },
  };
  
  componentDidMount(): void {
    const {
      match: {
        params: {
          postId,
        }
      }
    } = this.props;
    
    const postsApi = new PostsApi();
    
    postsApi.getOne(postId)
      .then((response) => {
        this.setState({ post: response.data.data });
      }, (error) => {
        //
      })
  }
  
  onInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState((prevState) => ({
      ...prevState.post,
      post: {
        [name]: value,
      }
    }));
  };
  
  render() {
    const { post } = this.state;
  
    return (
      <>
        <AdminNavbar />
        
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card mb-3">
                  <div className="card-header">
                    Add Post (<NavLink to="/posts">Back to posts</NavLink>)
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control" id="title" value={ post.title } />
                    </div>
                    
                    <label htmlFor="content">Content</label>
                    <ReactQuill theme="snow" value={ post.content } onChange={ () => this.onInputChange }/>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <button className="btn btn-primary btn-block">Save</button>
                  </li>
                  <li className="list-group-item">
                    Published:
                  </li>
                  <li className="list-group-item">
                    Author: { post.author.name }
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

export default AddPostPage;
