import React from 'react'
import classes from './Footer.module.css'
import app from '../assets/appStore.png'
import play from '../assets/googlePlay.png'
function Footer() {
  return (
    <div className={classes.container}>
        <div className={classes.top}>
            <div className={classes.columns}>
                <div className={classes.column}>
                <h4>About Us</h4>
                <a href=''>About Us</a>
                <a href=''>Our history</a>
                <a href=''>Leadership Team</a>
                <a href=''>Values In Action</a>
                <a href=''>Franchise Info</a>
                <a href=''>Recalss & Alerts</a>
                <a href=''>Real Estate</a>
                <a href=''>Digital Accesibility</a>
                <a href=''>Investor Relations</a>
                <a href=''>News & Notifictions</a>
                </div>
                <div className={classes.column}>
                <h4>Services</h4>
                <a href=''>Services</a>
                <a href=''>Wi-Fi</a>
                <a href=''>Gift Cards</a>
                <a href=''>Play Places & Parties</a>
                <a href=''>McDelivery®</a>
                <a href=''>Mobile Order & Pay</a>
                <a href=''>Trending Now</a>
                <a href=''>McDonald's Merchandise</a>
                <a href=''>Family Fun Hub</a>
                <a href=''>McDonald's Rewards</a>
                <a href=''>McCafé®</a>
                </div>
                <div className={classes.column}>
                <h4>Community</h4>
                <a href=''>Community</a>
                <a href=''>HACER® Scholarships <br></br>for Hispanic Students</a>
                <a href=''>Ronald McDonald<br></br> House Charities </a>
                <a href=''>McDonald's Asian<br></br> Pacific American</a>
                <a href=''>McDonald's International</a>
                <a href=''>Black and Positively<br></br> Golden</a>
                <a href=''>McDonald's LGBTQ+</a>
                </div>
                <div className={classes.column}>
                <h4>Contact Us</h4>
                <a href=''>Contatc Us</a>
                <a href=''>Gift Card FAQs</a>
                <a href=''>Donations</a>
                <a href=''>Employment</a>
                <a href=''>Restaurant Feedback</a>
                <a href=''>Frequently Asked <br></br>Questions</a>
                </div>
            </div>
            <div className={classes.buttons}>
                <div className={classes.left}>
                <a href=''><i class="bi bi-facebook"></i></a>
                <a href=''><i class="bi bi-twitter"></i></a>
                <a href=''><i class="bi bi-youtube"></i></a>
                <a href=''><i class="bi bi-instagram"></i></a>
                <a href=''><i class="bi bi-tumblr"></i></a>
                <a href=''><i class="bi bi-spotify"></i></a>
                </div>
                <div className={classes.right}>
                    <a href=''>{<img src={app}/>}</a>
                    <a href=''>{<img src={play}/>}</a>
                </div>
            </div>
        </div>
        <hr className={classes.line}></hr>
        {/*Line is in here*/}
        <div className={classes.bottom}>
            <div className={classes.bottomleft}>

            </div>
            <div className={classes.bottomright}>
                
            </div>
        </div>
    </div>
  )
}

export default Footer