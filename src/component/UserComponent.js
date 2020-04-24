import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function UsersList(props){
    return(
        <div>
            <h1>Users List-{props.users.length}</h1>
            <ol>
                {
                    props.users.map(ele=>{
                    return(<li key={ele._id}>
                        <Link to={`/users/${ele.id}`}>{ele.name}</Link></li>)
                    })
                }
            </ol>

        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(UsersList)