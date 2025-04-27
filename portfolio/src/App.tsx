import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home';
import Home from './Home';
import Header from './components/Header';

import { Container, Row, Col } from 'react-bootstrap';
import Projects from './Projects';

function App() {

  return (
    <Container className="min-vw-100">
      <Row>
        <Col className="-0">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  )
}

export default App
