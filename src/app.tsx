/**
 * Entrypoint of the React application
 * 
 * Contains:
 * - Topmenu
 * - Routes for the subsites
 * - ReactDOM.render(...) call to initialize the application
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"

import {Menu} from "./components/menu"

import {Home} from "./pages/home"
import {Test1} from "./pages/test1"

export class TheApp extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/test1/" component={Test1} />
          </div>
        </BrowserRouter>
      </div>
      )
  }
}

ReactDOM.render(<TheApp/>,
  document.getElementById('root'));