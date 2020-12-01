import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO
            description="This is the about page!"
            title="Hello World About Page"
        />
        <h2>This is the about page</h2>

        <h1>Navigation:</h1>
        <Link to="/page-2/">Page 2</Link> <br />
        <Link to="/about/">About Me</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
)

export default AboutPage;