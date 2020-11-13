import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginHeader from "./LoginHeader";
import Login from "./Login";
import RegisterHeader from "./RegisterHeader";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
