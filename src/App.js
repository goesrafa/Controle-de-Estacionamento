import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron  from 'react-bootstrap/Jumbotron'

function App(){

  return(
    <>
      <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Controle de Estacionamento</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#moto">Moto</Nav.Link><br></br>
      <Nav.Link href="#carro">Carro</Nav.Link><br></br>
      <Nav.Link href="#relatorio">Relatório diario</Nav.Link>
    </Nav>
    
  </Navbar>
      <Jumbotron>
        <h1>Controle de Estacionamento</h1>
        <p>
          Controle de estacionamento com ReactJS
        </p>
      </Jumbotron>
    </>
  )
}

export default App;