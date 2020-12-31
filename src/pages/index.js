import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location} title={"Best CRM Softwares}>
      <SEO title="Best crm softwares" />
      <h1> What are the best CRM softwares ? </h1>
      <p> Tired of figuring out best crm softwares, check this 
  <a className="text-4xl font-bold text-yellow-600 font-display" href= "https://techcentred.com/top-5-best-crm-software-for-every-business/"> best crm softwares</a> list curated by  <a href="https://techcentred.com">TechCentred</a></p>

    </Layout>
  )
}

export default BlogIndex
