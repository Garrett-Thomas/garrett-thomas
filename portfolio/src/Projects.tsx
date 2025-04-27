
import { useEffect } from "react";


function Projects() {

    useEffect(() => {

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

        <figure id="spinner">
            <div className="spinner"></div>
        </figure>
        <div className="emscripten" id="status">Downloading...</div>
        <div className="emscripten">
            <progress value="0" max="100" id="progress" hidden={true}></progress>
        </div >

        <canvas className="emscripten" id="canvas" onContextMenu={handleContextMenu} tabIndex={-1}></canvas>
        <script>alert('hello');</script>
    </>);


}


export default Projects;