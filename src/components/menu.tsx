/**
 * Horay ... a static menu!
 */

import * as React from "react"
import {Menuitem} from "./menuitem"

export class Menu extends React.Component<{}, {}> {
    render() {
        return (
            <div className="menubox">
                <Menuitem text="Home" route="/" />|
                <Menuitem text="Test1" route="/test1/" />
            </div>
        );
    }
}