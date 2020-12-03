import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Works(){
    return(
        <section id="works">
            <h2>Personal Projects</h2>
            <hr/>

            <Button as={Link} to="/projects" className="m-2" variant="dark">
                Projects
            </Button>
        </section>
    )
}
export default Works;