import React from 'react'
import classes from './Rewards.module.css'
import left from '../assets/left1.png'
import right from '../assets/right1.jpeg'
import Button from '../layout/Button'
function Rewards() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img src={left} />
        <div className={classes.content1}>
          <h2>Free McDonald’s After Your First Order*</h2>
          <p>
            Join MyMcDonald's Rewards in the app today and unlock a free Hash
            Browns, Vanilla Cone, McChicken® or Cheeseburger after your first
            order.
          </p>
          <p>
            *Valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users.
            Program available only at participating McDonald's. Refer to  
            <a href='#'>MyMcDonald’s Program Terms</a> for details. Excludes delivery. McD app
            download and registration required.
          </p>
          <Button title="Download the app" />
        </div>
      </div>
      <div className={classes.right}>
        <img src={right} />
        <div className={classes.content2}>
        <h2>Earn an Extra 1500 Points</h2>
        <p>
          Link your credit or debit card to the McDonald's app and pick up your
          faves fast when you pay in the app. Plus, earn 1500 Bonus Points on
          your first payment using your linked card.
        </p>
        <p>
          *Valid 1x thru 12/31/22 at participating McDonald's. This offer is
          intended only for use by the recipient of the offer and this
          MyMcDonald's Rewards account. Bonus points may take up to 10 days to
          appear in your account. Rewards program available only at
          participating McDonald's. Excludes delivery. McDonald's app download
          and registration required.
        </p>
        <Button title="Link Payment Now in the App" />
        </div>
      </div>
    </div>
  );
}

export default Rewards