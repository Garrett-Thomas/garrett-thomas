import { Image, Row, Col, Container, Card } from "react-bootstrap";

function Home() {

    return (
        <Container className="pt-5 mt-5">
            <Row className="align-items-center">
                <Col xs={3}>
                    <Image className="h-25" src="public/profile.jpg" roundedCircle fluid />
                </Col>

                <Col>
                    <Card>

                        <Card.Body><Card.Text>
                            Hello! I'm Garrett, a rising junior studying <strong>Computer Science</strong> at Brigham Young University.
                        </Card.Text>
                            <Card.Text>
                                I am interested in Systems Engineering, Cyber Security and Machine Learning.
                                Follow my socials below to get in contact with me!
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            <Row>


            </Row>
        </Container>
    )
}

export default Home 
