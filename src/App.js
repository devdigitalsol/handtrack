import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HandTrack from "./HandTrack/HandTrack";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/track-hand">
          <HandTrack />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
