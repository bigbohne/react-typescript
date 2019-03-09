import * as React from "react"
import * as ReactDOM from "react-dom"

import {Title} from "./components/title"
import {Timeprovider} from "./components/timeprovider"
import { string } from "prop-types";

interface TheAppState {
  time? : string;
}

export class TheApp extends React.Component<{}, TheAppState> {
  
  constructor(props : any) {
    super(props);

    this.state = {};
  }

  updateTime(newTime : string) {
    this.setState({
      time: newTime
    });    
  }

  render() {
    return (
      <Timeprovider callback={this.updateTime.bind(this)}>
        <Title message="Bonjour!" time={this.state.time} />
        <Title message="Hello!" time={this.state.time} />
      </Timeprovider>
      )
  }
}

ReactDOM.render(<TheApp/>,
  document.getElementById('root'));