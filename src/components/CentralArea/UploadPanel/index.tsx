import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';
import Api from "../../../Api";

interface IUploadPanelProps {
    closeUpload: () => void;
    api: Api;
    getImages: () => Promise<void>;
}

class UploadPanel extends PureComponent<IUploadPanelProps>{
    render(): React.ReactNode {
        return (
            <div className="add_file">
                <div className="close" id="close_add" onClick={this.props.closeUpload}>X</div>
                <div id="container">
                    <label htmlFor="add_file">
                        <img src="folder_up.png" />
                    </label>
                    <p>ADD PICTURE TO GALLERY</p>
                    <input onChange={async event => {
                        await this.props.api.addImage(event.target.files);
                        this.props.closeUpload();
                        await this.props.getImages();
                    } }
                           id="add_file"
                           type="file"
                           accept="image/jpeg,image/png,image/jpeg" multiple />
                </div>
            </div>
        );
    }
}

export default UploadPanel;
