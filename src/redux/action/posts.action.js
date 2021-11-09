import axios from "axios";
import { CERETE_POSTS, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../types";

export const getPosts = () => dispatch => {
        axios.get("https://jsonplaceholder.typicode.com/users/")

                .then(res => {
                        console.log(res.data);
                        dispatch({
                                type: GET_POSTS,
                                payload: res.data
                        })
                })
                .catch(err => console.log(err))
}

export const deletePosts = id => dispatch => {
        console.log('qqq');
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {
                        console.log(res.data, 'code or id');
                        dispatch({
                                type: DELETE_POSTS,
                                payload: id
                        })
                })
                .catch(err => console.log(err))
}

/****************************Cerete*******************************/

export const ceretePosts = params => dispatch => {
        console.log('paramas');
        axios.post(`https://jsonplaceholder.typicode.com/users/`, params)
                .then(res => {
                        console.log('params world')
                        dispatch({
                                type: CERETE_POSTS,
                                payload: params
                        })

                })
                .catch(err => console.log(err))
}

/**********************************Edit**********************************/

export const editPosts = params => dispatch => {
console.log(params)
axios.put(`https://jsonplaceholder.typicode.com/users/${params.id}`,params)
.then (() =>{
        console.log('api is working');
        dispatch({
                type:EDIT_POSTS,
                payload:params
        })
})
}

// import axios from "axios"
// import { GET_POSTS } from "../types"

// export const getBranch = () => dispatch => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/')
//         .then(res => {
//             console.log(res.data);
//             dispatch({
//                 type: GET_POSTS,
//                 payload: res.data
//             })
//         })

//         .catch(error => {
//             console.log(error);
//         })

// }