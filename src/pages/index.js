import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import Skills from "../components/skills"
import indexStyle from "../styles/index.module.less"


export default () => (
    <Layout>
        <SEO title="Portafollio" keywords={[`developer`, `frontend`, `react`, `angular`, `html5`, `css3`, `javascript`, `sergio`, `alcala`]} />
        <Header />
        <section className={indexStyle.container}>
            <About />
            <Skills />
        </section>
    </Layout>
)
