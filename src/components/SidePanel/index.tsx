import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

class SidePanel extends PureComponent{
    render(): React.ReactNode {
        return (
            <div className="sidePanel">
                <div id="add">+ ADD</div>
            </div>
        );
    }
}

export default SidePanel;
