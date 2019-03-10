/**
 * In this page there is a single provider (Timeprovider) for data
 * and two (Title) consumer for the data.
 * 
 * Imagine the Timeprovider using a single REST call to forward data to multiple components.
 */

import * as React from "react"

import {Title} from "../components/title"
import {Timeprovider} from "../components/timeprovider"

interface HomeState {
  time? : string;
}

export class Home extends React.Component<{}, HomeState> {
  
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