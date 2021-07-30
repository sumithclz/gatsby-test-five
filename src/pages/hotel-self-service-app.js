import * as React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
//import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const hotelSelfServiceApp = () => (
  <Layout>
    <div className="banner-wrapper-app">
      <div className="container">
        <div className="banner-wrapper-inner">
          <h1>HOTEL ROOM SERVICE APP</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="page-body">
        <div className="page-description">
            <h2>GUEST EXPERIENCE VIA MOBILE SERVICES</h2>
            <p>Traveler’s today being more technically savvy use gadgets on their trips and most of their journeys begin with a mobile device. Some prefer to check in using their mobiles, avoiding the front-desk lines in hotel lobbies. Hoteliers can consider using digital elements and technology to meet travelers’ needs. Mobile technologies are used to automate routine services in the daily interactions. The amount of time spent on Smartphone applications is skyrocketing. People remain linked everywhere and at any time across borders. Hospitality industries can find ways and possibilities for these developments as embracing mobile technology and incorporating it with the hotel system enhancing guest service financially and operationally. Excellent customer service has been a staple in the hospitality industry. Smartphone is altering people’s perception of constituting good service. Most Guests would rather sign in on their mobile phone than stand in line at the front desk even though they prefer the ability to interact with hotel staff and facilities. Apps today have infiltrated almost every industry, especially hospitality and other customer-service-oriented industries having the potential to benefit both guests and operations.</p>
        </div>
        <div className="page-description">
            <h2>MOBILE SERVICE APP</h2>
            <p>Enhance guest experience with mobile services to place their request at their fingertips from the room.</p>
        </div>
        <div className="page-main-features">
            <div className="row">
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/06/mobile-check-in.jpg"/>
                        <div className="feature-des">
                            <h2>MOBILE CHECKIN</h2>
                            <div className="list-style">
                              <ul>
                                <li>Allow your guest to checkin in mobile app</li>
                                <li>Manage their bookings</li>
                                <li>View folio and pay via app</li>
                              </ul>
                            </div>
                            <button className="btn btn-learn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2020/05/Smart-Hotel.jpg"/>
                        <div className="feature-des">
                            <h2>IN ROOM SERVICES</h2>
                            <div className="list-style">
                              <ul>
                                <li>Reduce over the phone orders</li>
                                <li>Remove the need to change hardcopy menu for number of rooms</li>
                                <li>Switch over to inituive eservices or your guest</li>
                                <li>Browse, select and place order</li>
                                <li>Food, In room services, Transport, spa and facial services</li>
                              </ul>
                            </div>
                            <button className="btn btn-learn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-inner">
                        <StaticImage imgClassName="ftr-img" src="https://www.clovatel.com/wp-content/uploads/2021/04/smart-room-controlling-1.jpg"/>
                        <div className="feature-des">
                            <h2>SMART ROOM CONTROLLING</h2>
                            <div className="list-style">
                              <ul>
                                <li>Smartphone-enabled room access</li>
                                <li>Lighting Control</li>
                                <li>AC Control</li>
                                <li>Curtain Control</li>
                                <li>TV Control</li>
                              </ul>
                            </div>
                            <button className="btn btn-learn">Learn More</button>
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

export default hotelSelfServiceApp