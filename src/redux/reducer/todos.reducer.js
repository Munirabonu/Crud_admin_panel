// import { CERETE_POSTS, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../types";

import axios from "axios";
import { CERETE_TODOS, DELETE_TODOS, EDIT_TODOS, GET_TODOS } from "../types";

// const initialState = {
//     posts: []
// }

// export const postsReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts: payload
//             }
//         case CERETE_POSTS:
//             return {
//                 ...state,
//                 posts: [...state.posts, payload]
//             }
//         case DELETE_POSTS:
//             return {
//                 ...state,
//                 posts: [...state.posts.filter(item => item.id !== payload)]
//             }
//         
//         default:
//             return state
//     }
// }

const initialState = {
    todos: []
}

export const reducerTodos = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            }
        case CERETE_TODOS:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case DELETE_TODOS:
            return {
                ...state,
                todos: [...state.todos.filter(item => item.id !== payload)]
            }
        case EDIT_TODOS:
            const index = state.todos.findIndex(item => item.id === payload.id)
            const todos = [...state.todos.slice(0, index), payload, ...state.todos.slice(index + 1)]
            return {
                ...state,
                todos:[...todos]
            }
        default:
            return state
    }
}
