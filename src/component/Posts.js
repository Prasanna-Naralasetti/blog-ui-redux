import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'


function Posts(props){
    return(
        <div>
            <h1>Posts-{props.posts.length}</h1>
            <ul>
                {props.posts.map((ele,id)=>{
                    return(
                        <li key={id}>
                            <Link to={`/posts/${ele.id}`}>{ele.title}</Link>
                            </li>
                    )
                })}
            </ul> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Posts)