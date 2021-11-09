import { CREATE_COMMENTS, DELETE_COMMENTS, EDTI_COMMENTS, GET_COMMENTS } from "../types"

const initialState = {
    comments: []
}

export const reducerComment = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: payload
            }
        case CREATE_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, payload]
            }
        case DELETE_COMMENTS:
            return {
                ...state,
                comments: [...state.comments.filter(item => item.id !== payload)]
            }
        case EDTI_COMMENTS:
            const index = state.comments.findIndex(item => item.id === payload.id)
            const comment = [...state.comments.slice(0, index), payload, ...state.comments.slice(index + 1)]
            return {
                ...state,
                comments: [...comment]
            }
        default:
            return state
    }
}
