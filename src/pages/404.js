import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#000",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 48,
  maxWidth: 320,
  color: "#1976D2", // Soften the color for a calmer look
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>

     
      <title>Page Not Found</title>
      <h1 style={headingStyles}>Lost in Space?</h1>
      <p style={paragraphStyles}>
        Don’t worry, it happens to the best of us. Let’s get you back home.
      </p>
      <Link to="/resources" style={{
        background: "#1976D2",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textDecoration: "none",
      }}>
        Return to Resources
      </Link>
    </main>
  )
}

export default NotFoundPage
