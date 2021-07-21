import React from 'react';
import './style.css';
import {PureComponent, Component} from "react";
import CentralArea from "../CentralArea";
import SidePanel from "../SidePanel";
import Api from "../../Api";

interface IAppState {
    isOpenUpload: boolean;
}

class App extends PureComponent{

    state = {
        isOpenUpload:false
    }

    render(): React.ReactNode {
        return (
            <div className="justdiv">
                <SidePanel openUpload={this.openUploadHandler} />
                <CentralArea closeUpload={this.closeUploadHandler} isOpenUpload={this.state.isOpenUpload} api={new Api()}/>
            </div>
        );
    }

    private openUploadHandler = () => {
        this.setState({
            isOpenUpload:true
        })
    }

    private closeUploadHandler = () => {
        this.setState({
            isOpenUpload:false
        })
    }
}

export default App;
