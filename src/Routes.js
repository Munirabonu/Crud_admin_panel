import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Branches from './page/Branches'
import Comments from './page/Comments'
import Param from './page/Error'
import Posts from './page/Posts'
import Todos from './page/Todos'

export const RoutesPanel = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/users' element={ <Branches />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/todos' element={<Todos />} />
                <Route path='*' element={<Param />} />
            </Routes>
        </React.Fragment>
    )
}