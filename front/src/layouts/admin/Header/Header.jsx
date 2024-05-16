import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <ul>
            <li>
                <Link to='/admin'>Products</Link>
            </li>
            <li>
                <Link to='/admin/add'>Add</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
