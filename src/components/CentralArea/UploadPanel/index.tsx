import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';

class UploadPanel extends PureComponent{
    render(): React.ReactNode {
        return (
            <div className="add_file" hidden>
                <div className="close" id="close_add">X</div>
                <div id="container">
                    <label htmlFor="add_file">
                        <img src="folder_up.png" />
                    </label>
                    <p>ADD PICTURE TO GALLERY</p>
                    <input id="add_file" type="file" accept="image/jpeg,image/png,image/jpeg" multiple />
                </div>
            </div>
        );
    }
}

export default UploadPanel;
