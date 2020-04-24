import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function PostsShow(props) {
    console.log(props.user)
    return (
        <div>
            {props.user && props.post ? (
                <div>
                    <h1>user Name-{props.user.name}</h1>
                    <h2>title-{props.post.title}</h2>
                    <h1>body</h1>
                    <h2>{props.post.body}</h2>
                    <h1>comments</h1>
                    <ul>
                        {
                            props.comments.map(comment => {
                                return <li key={comment.id}>{comment.body}</li>
                            })
                        }
                    </ul>
                    <Link to={`/users/${props.user.id}`}>About Author-{props.user.name}</Link>
                </div>
            ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        user: state.users.find(user => user.id == state.posts.find(post => post.id == id).userId),
        post: state.posts.find(post => post.id == (id)),
        comments: state.comments

    }
}
export default connect(mapStateToProps)(PostsShow)