import * as React from "react"

export interface TitleProperties {
    message: string;
    time?: string;
}

export class Title extends React.Component<TitleProperties, {}> {
    render() {
        return (
        <h1>Message:&nbsp;{this.props.message}&nbsp;
            {this.props.time && <span>Time: {this.props.time}</span>}
        </h1>);
    }
}