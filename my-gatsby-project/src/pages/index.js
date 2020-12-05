import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import CodeImage from "../components/new"
import SEO from "../components/seo"
import NewImage from "../components/NewImage"






const IndexPage = () => (
  <Layout>
    <SEO title="Home"
    />
    <h1>This is a Gastby Build</h1>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <CodeImage />
    </div>


    <NewImage
      src={"/images/myEyes.png"}
      alt={"Oh lord my eyes!"}
    />

    <NewImage
      src={"/images/Code.png"}
      alt={"New Code!"}
    />



    <Link to="/page-2/">Page 2</Link> <br />
    <Link to="/about/">About Me</Link> <br />
    <Link to="/about/">Projeccts</Link> <br />
    <Link to="/about/">Code</Link> <br />
    <Link to="/about/">Hobbies</Link> <br />
    <Link to="/about/">Speaking</Link> <br />

  </Layout>
)

export default IndexPage
