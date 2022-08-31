import React from 'react'
import { Container } from "react-bootstrap"

export default function BiarRapih({ children }) {
  return (
    <Container 
        className = "d-flex align-items-center justify-content-center" 
        style = {{ minHeight: "100vh" }}
      >
        <div className = "w-100 border border-success rounded" style={{ maxWidth: "500px" }}>
          {children}
        </div>
    </Container>
  )
}
