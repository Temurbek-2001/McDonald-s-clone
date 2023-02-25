import React from 'react'
import classes from './Grid.module.css'
import GridItem from './GridItem'
import img1 from "../assets/grid1.png"
import img2 from "../assets/grid2.png"
import img3 from "../assets/grid3.png"
import img4 from "../assets/grid4.jpeg"
function Grid() {
  const p = {
    first:
      `Choose your McDonald's item, whether you’re craving aMcChicken (Regular or Hot ‘N Spicy), Hash Browns, Vanilla Cone or our classic Cheeseburger.`,
    second:
      `Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.`,
    third:
      `We’re going large with your choice of large Fries, large Frappé, Filet-O-Fish® or Sausage McMuffin® with Egg. `,
    fourth:
      `Save up your points and you could get a Big Mac®, Quarter Pounder®* with Cheese, Happy Meal® or Bacon, Egg & Cheese Biscuit!`,
    sub: "* Weight before cooking 4 oz",
  };
  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <h1>More Points Unlock More Rewards</h1>
            <p>It's easy to track your McDonald's points and see how far you are from unlocking the next tier of free McDonald's.</p>
        </div>
        <div className={classes.grid}>
          <GridItem src={img1} title="1500" p={p.first}/>
          <GridItem src={img2} title="3000" p={p.second}/>
          <GridItem src={img3} title="4500" p={p.third}/>
          <GridItem src={img4} title="6000" p={p.fourth} subtxt={p.sub}/>
        </div>
    </div>
  )
}

export default Grid