import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Home';
import Home from './Home';
import Header from './components/Header';

import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <Container>
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



            </Routes>

          </BrowserRouter>
        </Col>
      </Row>
      <Row>
      <Col>
      <p>Footer</p>
      </Col>
      </Row>
    </Container>
  )
}

export default App
