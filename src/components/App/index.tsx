import React from 'react';
import './style.css';
import {PureComponent, Component} from "react";
import CentralArea from "../CentralArea";
import SidePanel from "../SidePanel";
import Api from "../../Api";


class App extends PureComponent{
    render(): React.ReactNode {
        return (
            <div className="justdiv">
                <SidePanel />
                <CentralArea api={new Api()}/>
            </div>
        );
    }
}

export default App;
