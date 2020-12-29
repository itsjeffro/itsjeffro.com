import * as React from 'react';
import DateTime from "../../../../../services/DateTime";

const Post = (props) => {
  const { post } = props;
  const date = new DateTime(post.createdAt);
  
  let day = date.getDay();
  let month = date.getFullMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridiem = date.getMeridiem();
  
  let createdAt = `${ day } ${ month }, ${ year } - ${ hours }:${ minutes } ${ meridiem.toUpperCase() }`;

  return (
    <article className="post">
      <h2>{ post.title }</h2>
      <p><span title={ post.createdAt }>{ createdAt }</span></p>
      { post.content }
    </article>
  )
};

export default Post;
