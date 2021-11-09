import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'
export default function Home() {
    return (
        <React.Fragment>
            <div className='homePanel'>
                <h1>Welcome to Admin panel</h1>
                <br />
                <div className='homeUl'>
                <p>you can use these sections :</p>
                <ul>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                    <li>
                        <Link to='/comments'>Comment</Link>
                    </li><li>
                        <Link to='/posts'>Posts</Link>
                    </li><li>
                        <Link to='/todos'>Todos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
