import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

interface IPictureProps {
    image:string;
}

class Picture extends PureComponent<IPictureProps>{
    render(): React.ReactNode {
        return (
            <div className="pic_ico">
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Picture;
