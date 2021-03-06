import * as React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const bookingEngine = () => (
  <Layout>
    <div className="banner-wrapper-booking">
      <div className="container">
        <div className="banner-wrapper-inner">
          <h1>Hotel Booking System</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="page-body">
        <div className="page-description">
            <h2>HAVE DIRECT BOOKINGS WITH WEBSITE, SOCIAL MEDIA DIRECTLY INTO YOUR PMS.</h2>
        </div>
        <div className="page-main-features">
            <div className="row">
                <div className="col-md-6">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/06/booking-1.jpg"/>
                        <div className="feature-des">
                            <h2>ONLINE BOOKING ENGINE</h2>
                            <p>Display the available rooms and rates via your hotels website, social media and get bookings directly from your guests.</p>
                            <p>No commission fee</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/05/ONLINE-PAYMENT.jpg"/>
                        <div className="feature-des">
                            <h2>ONLINE PAYMENT</h2>
                            <p>Integrate with Online prefered payment gateway of yours.</p>
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

export default bookingEngine