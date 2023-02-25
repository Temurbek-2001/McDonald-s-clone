import React from 'react'
import classes from './Home.module.css'
import Header from '../layout/Header'
import main from '../assets/main.jpeg'
import Button from '../layout/Button';
import Rewards from './Rewards';
import Redeem from './Redeem';
import Grid from './Grid';
import Footer from './Footer';
function Home() {
  return (
    <div className={classes.container} class="container-fluid">
      <Header />
      <div className={classes.home}>
        <div className={classes.imgtext}>
          <div className={classes.heading}>
            <h1>My McDonald's Rewards</h1>
            <p>
              With the McDonald’s app, you can earn points on every order to
              redeem for free McDonald's. Plus, get access to exclusive daily
              deals, easily re-order faves and select convenient pickup options
              with Mobile Order & Pay.
            </p>
          </div>
          <div className={classes.content}>
            <img src={main} class="img-fluid" className={classes.image} />
            <div className={classes.text}>
              <h2>Free Fries Now. Free McDonald’s Later.*</h2>
              <p className={classes.middle}>
                Get free large Fries when you download the McDonald’s app and
                join MyMcDonald’s Rewards. Then, unlock free McDonald’s faves
                only in the app with <a href="">1500 bonus points</a> after your
                first purchase.
              </p>
              <p className={classes.small}>
                *Offer valid 1x thru the last day of the month for first time
                app users at participating McDonald's until 10/31/22. May take
                up to 48 hours to appear in your deals. Free Loyalty Reward
                Points valid 1x thru 12/31/22 for first time MyMcDonald’s
                Rewards users. Program available only at participating
                McDonald’s. Excludes delivery. McD app download and registration
                required.
              </p>
              <Button title='Download the App'/>
            </div>
          </div>
        </div>
        <Rewards/>
        <Redeem/>
        <Grid/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home