/**
 * Horay ... a static menu!
 */

import * as React from "react"
import {Link} from "react-router-dom"

import './menu.scss'

export class Menu extends React.Component<{}, {}> {
    render() {
        return (
            <div className="menubox">
                <Menuitem text="Home" route="/" />
                <Menuitem text="Test1" route="/test1/" />
            </div>
        );
    }
}

interface MenuitemProps {
    text : string;
    route : string;
}

class Menuitem extends React.Component<MenuitemProps, {}> {
    render() {
        return (
            <Link className="menuitem" to={this.props.route}>{this.props.text}</Link>
        );
    }
}