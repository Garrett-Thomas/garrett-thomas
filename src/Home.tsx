import { Image, Row, Col, Container, Card } from "react-bootstrap";
import profile from "../public/profile.jpg";

function Home() {

    return (
        <Container className="pt-5 mt-5">
            <Row className="align-items-center">
                <Col md={{ span: 3, offset: 1 }}>
                    <Image className="h-25" src={profile} roundedCircle fluid />
                </Col>

                <Col md={{ offset: 1 }}>
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
                <Col md={{ span: 4, offset: 5 }}>
                    <Card>
                        <Row>
                            <Col className="text-center">
                                <a href="https://www.linkedin.com/in/garrett-thomas-042332221/">
                                    {/* <Card.Text> */}
                                    <svg viewBox="0 0 24 24" data-supported-dps="24x24" width="64" height="64" focusable="false">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                    {/* </Card.Text> */}

                                </a>
                            </Col>
                            <Col className="text-center">
                                <a href="https://github.com/Garrett-Thomas">
                                    {/* <Card.Text> */}
                                    <svg height="64" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="64" data-view-component="true"
                                        className="octicon octicon-mark-github v-align-middle">
                                        <path
                                            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z">
                                        </path>

                                    </svg>
                                    {/* </Card.Text> */}
                                </a>

                            </Col>
                            <Col className="text-center">

                                <a href="mailto:gt92130@byu.edu">
                                    {/* <Card.Text> */}
                                    <svg fill="#000000" width="64" height="64" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd" />
                                    </svg>
                                    {/* </Card.Text> */}
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </Col>

            </Row>
        </Container >
    )
}

export default Home 
