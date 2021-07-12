import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button } from 'react-bootstrap';
//  import "bootstrap/dist/css/bootstrap.min.css";
//  import "jquery/dist/jquery.min.js";
//  import "popper.js/dist/popper.min";
//  import "bootstrap/dist/js/bootstrap.min.js";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />

      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light navbar-right">
          <a class="navbar-brand" href="#">
            <img src="https://www.clovatel.com/wp-content/uploads/2020/06/clovatel-logo-png-1.png" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navlinks">
            <li className="navlinkitem">
              <Link to="/" className="navlinktext"> Home </Link>
            </li>
            <li className="navlinkitem">
              <Link to="/about" className="navlinktext"> About </Link>
            </li>
            <li className="navlinkitem">
              <Link to="/blog" className="navlinktext"> Blog </Link>
            </li>
          </ul>
          </div>
        </nav>
      </div>
      <div className="main-wrapper"> {children} </div>
    </main>
  )
}

export default Layout
