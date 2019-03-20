import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const User = props => {
    return(
        <div style={{border: "1px solid black", margin: '15px auto', width: '50%', padding: "10px"}}>
            <h2>{props.user.name}</h2>
            <Link to={`/posts/${props.user.id}`}>
                <button>get posts from this user</button>
            </Link>
            <button
                onClick={e => {
                    props.deleteUser(props.user.id)
                }}
            >delete user</button>
        </div>
    )
}

export default User;