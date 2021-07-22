import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

interface IOpenedPictureProps {
    index:number;
    name: string;
    closePicture: () => void;
    scrolLeft: () => void;
    scrolRight: () => void;
    delete: () => Promise<void>;
    getImages: () => Promise<void>;
}

class OpenedPicture extends  PureComponent<IOpenedPictureProps>{

    render(): React.ReactNode {
        return (
            <div className="pic_big" id="pic_big">
                <div className="close" id="close" onClick={this.props.closePicture}>X</div>
                <div className="arrow" id="left" onClick={this.props.scrolLeft}>{"<"}</div>
                <div className="arrow" id="right" onClick={this.props.scrolRight}>{">"}</div>
                <div className="origin_pic">
                    <img id="origin_pic" src={this.props.name} />
                </div>
                <div className="delete">
                    <img onClick={async ()=>{
                        await this.props.delete();
                        await this.props.getImages();
                    }} id="del" src="delete.png" />
                </div>
            </div>
        );
    }
}

export default OpenedPicture;
