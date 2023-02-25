import React from 'react'
import classes from './Redeem.module.css'
import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'
function Redeem() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>How to Earn Points and Redeem Faves</h1>
        <p>
          Order like a pro––all it takes is one code or one scan to earn
          MyMcDonald’s Rewards points, quickly pay and redeem your favorites.
        </p>
      </div>
      <div className={classes.content}>
        <div className={classes.one}>
          <img src={one} />
          <div className={classes.text}>
            <h3>Easily Earn Points</h3>
            <p classname={classes.medium}>
              Select the ‘Earn Points’ tab in the <a href=''>McDonald's app</a> found on the
              bottom menu bar. Access the 4-digit Drive Thru Code or code to
              scan at the counter or kiosk. When you place your order in the
              app, you'll automatically earn your points.
            </p>
          </div>
        </div>
        <div className={classes.two}>
          <img src={two} />
          <div className={classes.text}>
            <h3>Pay & Earn All in One Step</h3>
            <p className={classes.medium}>
              Link your card details to the app so you can conveniently pay and
              earn points at the same time—including an extra 1500 Bonus Points
              on your first payment using your linked card. Then, simply tell us
              your Drive Thru code before placing your order at the speaker or
              scan the code in-restaurant.
            </p>
            <p className={classes.small}>
              *Bonus points may take up to 10 days to appear in your account.
              Rewards program available only at participating McDonald's.
              Excludes delivery. McDonald's app download and registration
              required.
            </p>
          </div>
        </div>
        <div className={classes.three}>
          <img src={three} />
          <div className={classes.text}>
            <h3>Redeem Free McDonald’s</h3>
            <p className={classes.medium}>
              Go to the Rewards & Deals tab. There you can select the menu item
              you want to redeem. Choose ‘Use at Restaurant’ to get the Drive
              Thru code, or select ‘Use Restaurant Code’ when you’re inside to
              reveal the code to use at the counter or kiosk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Redeem