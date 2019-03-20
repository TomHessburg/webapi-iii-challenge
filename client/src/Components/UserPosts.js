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
                            return <div key={post.id}>
                            <span>post {index+1}:</span>
                            <p>{post.text}</p>
                            </div>
                        })}
                    </ul>

                </div> : null }
            </div>
        );
    }
}

export default UserPosts;