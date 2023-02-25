import React from 'react'
import Header from '../layout/Header'
import Footer from './Footer'
import classes from './Locate.module.css'
export default function () {
  return (
    <div className={classes.container}>
        <Header/>
        <div className={classes.map}>
        
        </div>
        <Footer/>
    </div>
  )
}
