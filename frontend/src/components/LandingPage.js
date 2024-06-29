import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Form } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Encabezado */}
      <header className="hero text-center py-5 bg-primary text-white">
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <Carousel controls={false} indicators interval={3000} className="w-75">
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block w-50 mx-auto"
                    src="https://images.hola.com/imagenes/cocina/noticiaslibros/20221124221446/recetas-faciles-rapidas-cocina-casera/1-168-262/albondigas-champis-gtres-a.jpg"
                    alt="Albondigas en salsa"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block w-50 mx-auto"
                    src="https://recetasdecocina.elmundo.es/wp-content/uploads/2023/06/macarrones-con-tomate.jpg"
                    alt="Macarrones con tomate"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <img
                    className="d-block w-50 mx-auto"
                    src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/sushi.jpg.webp?itok=GKjx_bQU"
                    alt="Sushi"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <h1 className="display-4">Bienvenido a Recetas del Alma</h1>
          <p className="lead">Descubre, crea y comparte tus recetas favoritas con nosotros</p>
          <Button variant="light" size="lg" href="/crear">Comienza a Crear</Button>
        </Container>
      </header>

      {/* Acerca de Nosotros */}
      <section id="about" className="about py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4 text-center">Acerca de Nosotros</h2>
              <p className="lead text-center">
                ¡Hola! Soy Marta, la fundadora de esta plataforma apasionada por la cocina. Aquí en <strong>Recetas del Alma</strong>, nos dedicamos a inspirarte a crear y explorar nuevas recetas culinarias.
              </p>
              <p className="text-center">
                Desde recetas caseras hasta platos gourmet, nuestro objetivo es proporcionarte herramientas y recursos para que tu experiencia en la cocina sea memorable y satisfactoria.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Características */}
      <section className="features py-5 bg-light">
        <Container>
          <h2 className="mb-4 text-center">Nuestras Características</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon bg-primary rounded-circle mx-auto mb-3">
                    <i className="bi bi-egg text-white display-4"></i>
                  </div>
                  <Card.Title as="h3" className="mb-3">Fácil de Usar</Card.Title>
                  <Card.Text>
                    Interfaz intuitiva diseñada para usuarios de todos los niveles de habilidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon bg-primary rounded-circle mx-auto mb-3">
                    <i className="bi bi-book text-white display-4"></i>
                  </div>
                  <Card.Title as="h3" className="mb-3">Variedad de Recetas</Card.Title>
                  <Card.Text>
                    Explora una amplia gama de recetas, desde tradicionales hasta innovadoras.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon bg-primary rounded-circle mx-auto mb-3">
                    <i className="bi bi-people text-white display-4"></i>
                  </div>
                  <Card.Title as="h3" className="mb-3">Comunidad Culinaria</Card.Title>
                  <Card.Text>
                    Conéctate con otros entusiastas de la cocina y comparte tus creaciones favoritas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Últimas Recetas Creadas */}
      <section className="latest-recipes py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4 text-center">Últimas Recetas Creadas</h2>
              {/* Aquí puedes mostrar miniaturas de las últimas recetas */}
              <p className="text-center">Próximamente...</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Formulario de Suscripción */}
      <section className="subscription py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="mb-4 text-center">Suscríbete para Actualizaciones</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>
                <Button variant="primary" type="submit" block>¡Suscríbete!</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pie de Página */}
      <footer className="footer bg-dark text-white py-4 text-center">
        <Container>
          <p>&copy; 2024 Recetas del Alma. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}

export default LandingPage;
