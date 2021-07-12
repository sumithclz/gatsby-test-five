import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

//import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="main-des">
        <h1>HOSPITALITY MANAGEMENT SYSTEM</h1>
        <p><b>Self Service Kiosk offer modular integrated solutions for staff and guest experience</b></p>
        <p>Looking for the best technology to reach the pinnacle of growth to collaborate and streamlined daily operations, consider Clovatel, a cloud-based software solution integrated with an efficient, economical, seamless innovated system to satisfy all your needs in the hospitality industry.</p>
        <p>With the evolution of cloud technology, hoteliers can embrace technologies that can be programmed to streamlined practices making operations more efficient, saving time for employees, and delivering excellent guest experiences by scaling to new heights. Clovatel comes with piping hot sale solution coupled and incorporated with tools such as self-service kiosk, booking engine, room app, housekeeping appends retail POS, spa and wellness app, revenue management, channel manager and several more.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
