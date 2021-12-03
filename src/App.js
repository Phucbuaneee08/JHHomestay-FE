import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import React from "react"

import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import Homestays from "./pages/Homestays";

import FilteredHomestays from "./pages/pagination/FilteredHomestays";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/homepage" component={Homepage} />
          <Route path="/homestay" component={Homestays} />
          <Route path="/detail" component={Detail} />
          <Route path="/listHomestays" component={FilteredHomestays} />
          <Redirect to="/homepage" />
        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
