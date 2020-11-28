import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import GameSpace from "./Components/GameSpace";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App container">
          <Switch>
            <Route exact path="/">
              <GameSpace />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
