import React from "react";
import Cards from "./Cards";
import HomeIcon from "@material-ui/icons/Home";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
function Projects() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div style={{ padding: "30px 0 0 30px" }}>
        <Link to="/">
          <Fab>
            <HomeIcon />
          </Fab>
        </Link>
      </div>
      <Cards />
    </div>
  );
}

export default Projects;
