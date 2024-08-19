import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div style={{ overflowX: "hidden" }} className='App p-0 m-0'>
            <HomePage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
