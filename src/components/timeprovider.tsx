/**
 * Class that provides a from a source through a callback
 */
import * as React from "react"
import { string } from "prop-types";

interface ReactProperties {
    callback(time : string): void;
}

export class Timeprovider extends React.Component<ReactProperties, {}> {
    timer: number;

    callback() {
        const date = new Date();
        this.props.callback(date.toISOString());
    }

    componentDidMount() {
        this.timer = setInterval(this.callback.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return this.props.children;
    }
}