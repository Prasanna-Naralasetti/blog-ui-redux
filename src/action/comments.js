import axios from 'axios'

export const startGetComments=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            
            const comments=response.data
            dispatch(setComment(comments))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const setComment = (comments) => {
    return { type: 'SET_COMMENTS', payload: comments }
}
