import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

  

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Carousel>
      <Carousel.Item>
        <img
          src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-1-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Clovatel Hotel Suite Of Solution  </h3>
          <p>Integrated Cloud base Hotel Management Solutions, that serves the need for hotels</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-2-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CLOVATEL KIOSK </h3>
          <p>Ease your front desk with Self Service checkin with Facical Recognition </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-3-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Clovatel PMS and OTA  </h3>
          <p>Get your rates to various booking platform and receive updates instanteously to your PMS  </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container">
        <div className="main-des">
          <h1>HOSPITALITY MANAGEMENT SYSTEM</h1>
          <p><b>Self Service Kiosk offer modular integrated solutions for staff and guest experience</b></p>
          <p>Looking for the best technology to reach the pinnacle of growth to collaborate and streamlined daily operations, consider Clovatel, a cloud-based software solution integrated with an efficient, economical, seamless innovated system to satisfy all your needs in the hospitality industry.</p>
          <p>With the evolution of cloud technology, hoteliers can embrace technologies that can be programmed to streamlined practices making operations more efficient, saving time for employees, and delivering excellent guest experiences by scaling to new heights. Clovatel comes with piping hot sale solution coupled and incorporated with tools such as self-service kiosk, booking engine, room app, housekeeping appends retail POS, spa and wellness app, revenue management, channel manager and several more.</p>
        </div>
        <div className="main-hightliter">
        <div className="row" >
          <div className="col-md-4">
            <div className="ftr-inner">
              <StaticImage imgClassName="ftr-img" src="../images/item-2-2.jpg"/>
              <h6><b>PMS</b></h6>
              <p>Property Management System (PMS) Manage your day to day front desk operation</p>
              <button className="btn btn-learn">Learn More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftr-inner">
              <StaticImage imgClassName="ftr-img" src="../images/item-5-2.jpg"/>
              <h6><b>SELF SERVICE KIOSK</b></h6>
              <p>Guests self check-in to their rooms, eliminating long queue at the front desk.</p>
              <button className="btn btn-learn">Learn More</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftr-inner">
              <StaticImage imgClassName="ftr-img" src="../images/item-4-1.jpg"/>
              <h6><b>CHANNEL MANAGER</b></h6>
              <p>Get real time room bookings from various booking engine into PMS.</p>
              <button className="btn btn-learn">Learn More</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="main-ftr">
        <div className="container">
          <div className="main-ftr-inner">
            <h1>ADD ON SOLUTIONS</h1>
            <p><b>Automate your operations</b></p>
          </div>
          <div className="row" >
            <div className="col-md-4">
              <div className="ftr-inner">
                <StaticImage imgClassName="ftr-img" src="../images/item-1-1.jpg"/>
                <h6><b>SMART HOTEL</b></h6>
                <button className="btn btn-learn">Learn More</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftr-inner">
                <StaticImage imgClassName="ftr-img" src="../images/item-6-1.jpg"/>
                <h6><b>HOTEL SELF SERVICE APP</b></h6>
                <button className="btn btn-learn">Learn More</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftr-inner">
                <StaticImage imgClassName="ftr-img" src="../images/item-3-1.jpg"/>
                <h6><b>CONTACTLESS TEMPERATURE VISITOR MANAGEMENT</b></h6>
                <button className="btn btn-learn">Learn More</button>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="common-btn-wrapper">
        <div className="container">
          <div className="sigle-btn">
            <button className="btn btn-learn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="container form-home">
        <h1>REQUEST A FREE DEMO</h1>
        <div className="row">
          <div className="col-md-8">
            <form method="post" action="#">
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Property Name"/>
              </div>
              <div className="form-group">
                <input type="text" name="email" id="email" placeholder="Property Type"/>
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="No of rooms"/>
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="Name"/>
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="Email Address"/>
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="Phone"/>
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder="Country"/>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Channel Manager </label><br></br>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Kiosk </label><br></br>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Hotel Self Service App </label><br></br>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Smart Hotel APP Guest </label><br></br>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Visitor Management </label><br></br>
              </div>
              <div className="form-group">
                <input type="checkbox" name="subject" id="subject" />
                <label for="vehicle1"> Booking Engine </label><br></br>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" rows="5" placeholder="Remarks"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-learn">Send</button>
              </div>
            </form>
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
                  <StaticImage imgClassName="ftr-flag" src="../images/sin-flag.jpg"/>
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
                  <StaticImage imgClassName="ftr-flag" src="../images/sri-flag.jpg"/>
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

export default IndexPage
