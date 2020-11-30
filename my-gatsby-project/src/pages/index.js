import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import CodeImage from "../components/new"
import SEO from "../components/seo"






const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      description="This is the Home page!"
      title="Hello World" />
    <h1>This is a Gastby Build</h1>

    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>

      <CodeImage />
    </div>

    <em>well that seems to be a odd way to add an image?</em>
    <Link to="/page-2/">Page 2</Link> <br />
    <Link to="/about/">About Me</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
