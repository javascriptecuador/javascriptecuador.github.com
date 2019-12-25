import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola</h1>
    <p>✨ Bienvenido al sitio de la <span style={{ color: `yellow`, fontSize: `16px` }}>Comunidad</span> <span style={{ color: `blue`, fontSize: `16px` }}> Javascript</span><span style={{ color: `red`, fontSize: `16px` }}> Ecuador</span> .</p>
    <p>Actualmente este sitio está en desarrollo, estamos buscando ayuda si quieres apoyar pasa por <a href="https://github.com/javascriptecuador/javascriptecuador.github.com">Nuestro repositorio en github</a></p>    
    <h2>👋 Pasa a saludar a:</h2>
    <ul>
      <li>Grupo en Telegram: <a href="https://t.me/javascriptecuador">JavaScript Ecuador</a> </li>    
    </ul>
    <h2>💫 También estamos en:</h2>
    <ul>
      <li>Twitter: <span><a href="https://twitter.com/jsecuador_">@jsecuador_</a> </span> </li>
      <li>Facebook</li>
      <li>Instagram</li>
    </ul>
    <h2>👀 Código de Conducta:</h2>
    <p>
    Tenemos un código de conducta puedes leerlo <a href="https://github.com/javascriptecuador/.github/blob/master/CODE_OF_CONDUCT.md">aquí</a> .
    </p>
    
    <h2>🚀 Proponer una charla</h2>
    <p>
    Tienes algo que contar o compartir, crea un issue proponiendo el tema <a href="https://github.com/javascriptecuador/Meetups">aquí</a> .
    </p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />      
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
