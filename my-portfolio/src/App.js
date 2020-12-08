import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
