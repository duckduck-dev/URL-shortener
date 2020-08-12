import React from 'react';

class Posts extends React.Component{

     mount = () => {
            const post = this.props.posts;
            
            post.map(data =>  console.log(data) );
            //this.props.posts.map(res => <div className="blue-text">{res}</div> )
      }

      render() {
            return (
                  <div >
                        {this.mount()}
                  </div>
            )           
      }      
};

export default Posts;