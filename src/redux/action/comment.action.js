import axios from "axios";
import { CREATE_COMMENTS, DELETE_COMMENTS, EDTI_COMMENTS, GET_COMMENTS } from "../types";

export const getComments = () => dispatch => {
        console.log('resalt');
        axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(res => {
                        dispatch({
                                type: GET_COMMENTS,
                                payload: res.data
                        })
                })
                .catch(error => console.log(error))
}

export const createComments = params => dispatch => {
        axios.post(`https://jsonplaceholder.typicode.com/comments/`, params)
                .then(res => {
                        dispatch({
                                type: CREATE_COMMENTS,
                                payload: params
                        })
                })
                .catch(error => console.log(error))
}

export const deleteComments = id => dispatch => {
        axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
                .then(res => {
                        dispatch({
                                type: DELETE_COMMENTS,
                                payload: id
                        })
                })
                .catch(err => console.log(err))
}
export const editcomments = params => dispatch => {
        axios.put(`https://jsonplaceholder.typicode.com/comments/${params.id}`, params)
                .then(() => {
                        dispatch({
                                type: EDTI_COMMENTS,
                                payload: params
                        })
                })
                .catch(err=> console.log(err))
}