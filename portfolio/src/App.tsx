import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container, Row, Col } from 'react-bootstrap';
import Projects from './Projects';

function App() {

  return (
    <Container className="h-100 vw-100">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
