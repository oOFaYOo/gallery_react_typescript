import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

class OriginalPicture extends  PureComponent{



    render(): React.ReactNode {
        return (
            <div className="pic_big" id="pic_big" hidden>
                <div className="close" id="close">X</div>
                <div className="arrow" id="left">{"<"}</div>
                <div className="arrow" id="right">{">"}</div>
                <div className="origin_pic">
                    <img id="origin_pic" src="" />
                </div>
                <div className="delete">
                    <img id="del" src="delete.png" />
                </div>
            </div>
        );
    }
}

export default OriginalPicture;
