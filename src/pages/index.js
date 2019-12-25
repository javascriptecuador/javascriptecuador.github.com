import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola</h1>
    <p>Bienvenido al sitio de la <span style={{ color: `yellow`, fontSize: `40px` }}>Comunidad</span> <span style={{ color: `blue`, fontSize: `40px` }}>Javascript</span><span style={{ color: `red`, fontSize: `40px` }}>Ecuador</span>.</p>
    <p>Este sitio está en desarrollo pero si quieres ayudar pasa por: <a href="https://github.com/javascriptecuador/javascriptecuador.github.com">Nuestro repositorio en github</a></p>    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />      
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
