import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from 'react-bootstrap/Carousel'
import ContactForm from "../components/contactForm"


const BlogPage = () => (
  <Layout>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-1-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-2-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.clovatel.com/wp-content/uploads/2020/07/slider-3-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <div className="container">
    <ContactForm></ContactForm>
  </div>
  </Layout>
)

export default BlogPage