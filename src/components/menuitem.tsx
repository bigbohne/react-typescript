import * as React from "react"
import {Link} from "react-router-dom"

interface MenuitemProps {
    text : string;
    route : string;
}

export class Menuitem extends React.Component<MenuitemProps, {}> {
    render() {
        return (
            <Link to={this.props.route}>{this.props.text}</Link>
        );
    }
}