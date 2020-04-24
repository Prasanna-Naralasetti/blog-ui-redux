
import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducer/userReducer'
import postsReducer from '../reducer/posts'
import commentsReducer from '../reducer/comments'
import thunk from 'redux-thunk'


const configureStore=()=>{
const store=createStore(combineReducers({  
        users:usersReducer, 
        posts:postsReducer,
        comments:commentsReducer  
    }),applyMiddleware(thunk))

return store
    
}
export default configureStore
    
