import React from 'react'
import classes from './GridItem.module.css'
function GridItem(props) {
  return (
    <div className={classes.container}>
    <img src={props.src} />
    <div className={classes.tetx}>
        <h2 className={classes.title}>{props.title} Points</h2>
        <p className={classes.paragraph}>{props.p}</p>
        <p className={classes.subtext}>{props.subtxt}</p>
    </div>
    </div>
  )
}

export default GridItem