import { CERETE_POSTS, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../types";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload
            }
        case CERETE_POSTS:
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        case DELETE_POSTS:
            return {
                ...state,
                posts: [...state.posts.filter(item => item.id !== payload)]
            }
        case EDIT_POSTS:
            const index = state.posts.findIndex(item => item.id === payload.id);
            const posts = [...state.posts.slice(0, index), payload, ...state.posts.slice(index + 1)]
            return {
                ...state,
                posts:[...posts]

            }
        default:
            return state
    }
}

