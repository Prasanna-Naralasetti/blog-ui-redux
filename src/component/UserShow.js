import React from 'react'

function UserShow(props){
    return(
        <div>
             <ul>
                {props.ele.map(post=>{
                    return(
                    <li><Link to={`/posts/${post.userId}`}>{post.title}</Link></li>

                    )
                })

                }
            </ul> 
            <Link to="/users">back</Link>
        </div>
    )
}

export default UserShow