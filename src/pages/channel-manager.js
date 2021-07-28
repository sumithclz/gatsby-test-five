import * as React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const channelmanager = () => (
  <Layout>
    <div className="banner-wrapper-channel">
      <div className="container">
        <div className="banner-wrapper-inner">
          <h1>HOTEL CHANNEL MANAGER SYSTEM</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="page-body">
        <div className="page-description">
            <h2>INCREASE YOUR REVENUE WITH ONLINE PRESENCE TO 100+ OTAS WORLDWIDE. REAL TIME INVENTORY AND RATE UPDATES AND BOOKINGS UPDATES TO PMS.</h2>
            <p>The booking engine interfaces with the hotel channel manager to guarantee that the room inventory is automatically modified across all the online platforms to avoid problems such as overbooking. When booking a room through an online travel agency, be rest assured that it is not still open through the hotel direct portal.</p>
            <p>By displaying up-to-date information across all delivery networks, OTAs combined with channel management which is integrated in the HMS systems. Guests allowed the option to not only book through the hotel’s website but also through online travel agencies. STAAH Channel Manager makes it simple to put a distribution plan into action and importantly establish alliances with numerous types of business agents, such as online travel agencies (OTAs)</p>
            <p>A practice of handling internet marketing platforms to market hotel inventory to multiple agents all over the world, such as online travel agents (OTAs), discount travel agents and so on. This phase made easier providing access to live pricing and real time inventory available as reducing the chance of overbooked rooms.</p>
            <p>A vital component with features that help companies’ future-proof themselves while still offering a high return on investment. A tool to make life easier while upgrading prices and availability, carrying out a range of events, bookings, and sales, and allowing long-term business planning.</p>
        </div>
        <div className="page-main-features">
            <div className="row">
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/06/intragrated.jpg"/>
                        <div className="feature-des">
                            <h2>INTEGRATED CHANNEL MANAGER</h2>
                            <div className="list-style">
                              <ul>
                                <li>Real time invetory update to PMS</li>
                                <li>Daily rates are updated without manual intervention</li>
                                <li>Manage all OTA channel in one central platform</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/06/manage.jpg"/>
                        <div className="feature-des">
                            <h2>MANAGE OTA</h2>
                            <div className="list-style">
                              <ul>
                                <li>Add or remove OTA in single dashboard</li>
                                <li>Distribute room inventory according to your preference to each OTA</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/05/6.jpg"/>
                        <div className="feature-des">
                          <h2>ICAL INTEGRATION</h2>
                          <div className="list-style">
                              <ul>
                                <li>Easy iCal calendar integration</li>
                                <li>Allow import and export your calendars on multiple platforms</li>
                                <li>supporting iCalendar (iCal) format</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <footer className="page-footer">
        <div className="footer-top-holder">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-logo">
                  <StaticImage imgClassName="ftr-logo" src="../images/clovatel-logo-png-300x78.png"/>
                </div>
                <div class="footer-nav custm">
                    <ul>
                        <li><a href="/" >Home</a></li>
                        <li><a href="/software/" >Software</a></li>
                        <li><a href="/request-for-demo/" >Signup</a></li>
                    </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-footer">
                  <img src="https://www.clovatel.com/wp-content/uploads/2020/04/sin-flag.jpg" />
                  <span>SINGAPORE</span>
                  <br></br>
                  <p>
                  59 Ubi Ave 1, Biz Link Centre,<br></br>
                  06-11 Singapore, 408 938.<br></br>
                  Tel  : (+65) 6451 1312 / 6692 9021<br></br>
                  E-mail : info@ionesoftsolutions.com
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-footer">
                  <img src="https://www.clovatel.com/wp-content/uploads/2020/04/sri-flag.jpg" />
                  <span>SRI LANKA</span><br></br>
                  <p>
                    No. 89, 2nd Floor, Old Kottawa Road, Nawinna, 
                    Maharagama, Sri Lanka.<br></br>
                    Tel : (+94) 11 21 60050<br></br>
                    E-mail : info@ionesoftsolutions.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-holder">
          <div className="footer-menu">
            <ul className="menu-footer-menu">
              <li ><a href="#" >Join Us</a></li>
              <li ><a href="#" >Disclaimer</a></li>
              <li ><a href="#" >Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-menu-socail">
            <ul className="menu-footer-menu-socail">
              <li ><a href="#" ><StaticImage imgClassName="ftr-img" src="../images/facebook.png"/> </a></li>
              <li ><a href="#" ><StaticImage imgClassName="ftr-img" src="../images/twitter.png"/></a></li>
              <li ><a href="#" ><StaticImage imgClassName="ftr-img" src="../images/linkedin.png"/></a></li>
              <li ><a href="#" ><StaticImage imgClassName="ftr-img" src="../images/skype.png"/></a></li>
            </ul>
          </div>
          <div className="copyrights">
            Copyright @ 2020 <a href="https://ionesoftsolutions.com/">iOneSoft Solutions Pte Ltd</a> . All Right Reserved.
          </div>
        </div>
      </footer>
  </Layout>
)

export default channelmanager