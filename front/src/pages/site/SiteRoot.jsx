import React from 'react'
import Header from '../../layouts/site/Header/Header'
import Footer from '../../layouts/site/Footer/Footer'
import {Outlet} from 'react-router-dom'

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot
