import { combineReducers } from 'redux'
import { postsReducer } from './branch.reducer'
import { reducerComment } from './comment.reducer'
import { reducerTodos } from './todos.reducer'
const rootReducer = combineReducers({
  postsReducer:postsReducer,
  reducerComment:reducerComment,
  reducerTodos:reducerTodos
  
})
export default rootReducer