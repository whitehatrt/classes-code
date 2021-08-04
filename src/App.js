import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserData from "./components/UserData";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user/:id">
            <UserData />
          </Route>
          <Route exact path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
