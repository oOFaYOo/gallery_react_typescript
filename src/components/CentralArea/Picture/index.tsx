import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

interface IPictureProps {
    image:string;
    index:number;
    openPicture: (name:string, index:number) => void;
}

class Picture extends PureComponent<IPictureProps>{
    render(): React.ReactNode {
        return (
            <div className="pic_ico" onClick={()=>this.props.openPicture(this.props.image, this.props.index)}>
                <img src={this.props.image} />
            </div>
        );
    }
}

export default Picture;
