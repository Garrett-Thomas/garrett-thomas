
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Projects() {

    useEffect(() => {

        // Not sure but Drone sim wants to rename title. This is a dirty hack to name it back
        let title = Array.from(document.getElementsByTagName('title'))[0];

        const config = { attributes: true, childList: true, subtree: true };

        const callback = function (mutationsList: MutationRecord[]) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    title.text = "G&T";
                }
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(title, config);

        const setup = document.createElement('script');
        const droneJS = document.createElement('script');

        setup.src = "setup.js";
        droneJS.src = "drone.js";

        droneJS.defer = true;
        droneJS.async = true;

        document.body.appendChild(setup);
        document.body.appendChild(droneJS);
    }, []);

    function handleContextMenu(e: { preventDefault: () => void; }) {

        e.preventDefault();

    }
    return (<>
        <Container className="mt-3 mb-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="text-center">
                            <figure id="spinner">
                                <div className="spinner"></div>
                            </figure>
                            <div className="emscripten" id="status">Downloading...</div>
                            <div className="emscripten">
                                <progress value="0" max="100" id="progress" hidden={true}></progress>
                            </div >
                            <canvas className="emscripten" id="canvas" onContextMenu={handleContextMenu} tabIndex={-1}></canvas>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Above is a simple simulation called <i>Smart Drones</i>. The black/pink squares are the drones and the goal of the program is for them to "learn" the path to the target.
                                Each drone has DNA composed of impulses applied to it. Each drone starts off with random DNA. After each generation, a few drones are selected to breed the next generation. These are the drones that
                                made it closest to the target. All pink squares are the top performers of the previoius generation and the black squares are their children.
                            </Card.Text>
                            <Card.Text>
                                Technologies used: <b>C, WASM</b>
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card className="mb-5">
                        <Card.Body><Card.Text>

                            <a href="https://github.com/Garrett-Thomas/tr8dr"><Button>Tr8dr</Button></a>
                        </Card.Text>
                            <Card.Text>
                                <i>Tr8dr</i> is a small SAAS app that allows you to train a simple machine learning model in the browser to produce buy or sell signals! The model is fed
                                technical indicators about a given stock and the user decides what type of architecture to use. If the user backtests the model
                                and sees that it is profitable, they can pay a small fee to have tr8dr run their model and message them when its producing a
                                buy or sell signal!

                                Technologies used: <b>WASM, TypeScript, React, MongoDB, AWS, Tensorflow</b>
                            </Card.Text>

                        </Card.Body>

                    </Card>

                    <Card>
                        <Card.Body><Card.Text>
                            <a href="https://github.com/Garrett-Thomas/startup"><Button>Sumo Game</Button></a>
                        </Card.Text>
                            <Card.Text>
                                Sumo Game is an IO style game for fun with friends.
                                In the game, players compete to bump one another
                                out of the arena just like sumo wrestlers do!
                                Complete with custom rooms, stat and account
                                management.

                            </Card.Text>

                            <Card.Text>
                                Technologies used: <b>AWS EC2, Caddy, MongoDB, React, Javascript</b>.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>

            </Row>
        </Container >

    </>);


}


export default Projects;