import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserPosts extends React.Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:4000/api/posts/specifiedUser/${this.props.match.params.id}`)
            .then(res => this.setState({posts: res.data}))
            .catch(err => console.log(err))
    }

    componentDidUpdate(){
        axios.get(`http://localhost:4000/api/posts/specifiedUser/${this.props.match.params.id}`)
            .then(res => this.setState({posts: res.data}))
            .catch(err => console.log(err))
    }

    deletePost = id => {
        console.log(id);
        axios.delete(`http://localhost:4000/api/posts/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                {this.state.posts.length > 0 ? 
                <div className="postPage">
                    <Link to="/">
                    <button>back to people</button>
                    </Link>
                    <ul>
                        {this.state.posts.map((post, index) => {
                            return <div key={post.id}
                                style={{border: "1px solid white", width: '90vw', margin: '10px auto', padding: '10px'}}
                            >
                            <span>post {index+1}:</span>
                            <p>{post.text}</p>
                            <button
                                onClick={e => this.deletePost(post.id)}
                            >delete this post</button>
                            </div>
                        })}
                    </ul>

                </div> : null }
            </div>
        );
    }
}

export default UserPosts;