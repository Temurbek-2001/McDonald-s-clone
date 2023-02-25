import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <button className={classes.button}>{props.title}{props.children}</button>
  )
}

export default Button