import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Importar componentes de Navbar y Nav de React Bootstrap

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Navbar.Brand as={Link} to="/" className="text-light mx-5">
          Recetas del Alma
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/inicio" className="text-light mx-2">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/crear" className="text-light mx-2">
              Crear Recetas
            </Nav.Link>
            <Nav.Link as={Link} to="/recetas" className="text-light mx-2">
              Lista Recetas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
