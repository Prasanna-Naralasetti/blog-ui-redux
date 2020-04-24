import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import UsersList from './component/UserComponent'
import Home from './component/Home'
import Posts from './component/Posts'
import PostsShow from './component/PostsShow'
import { connect } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>React-Redux</h1>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
      <Route path="/"component={Home} exact={true}/>
      <Route path="/users" component={UsersList} exact={true}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/posts/:id" component={PostsShow}/>
      
        
        
    </div>
    </BrowserRouter>
  
  )
}
export default App