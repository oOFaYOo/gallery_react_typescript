import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

interface ISidePanelProps {
    openUpload: () => void;
}

class SidePanel extends PureComponent<ISidePanelProps>{
    render(): React.ReactNode {
        return (
            <div className="sidePanel">
                <div id="add" onClick={this.props.openUpload}>+ ADD</div>
            </div>
        );
    }
}

export default SidePanel;
