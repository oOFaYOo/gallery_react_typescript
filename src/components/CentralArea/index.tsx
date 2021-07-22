import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';
import Api from "../../Api";
import Picture from "./Picture";
import OpenedPicture from "./OpenedPicture";
import UploadPanel from "./UploadPanel";

type openedPicture = {
    name: string,
    index: number
}

interface ICentralAreaProps {
    api: Api;
    isOpenUpload: boolean;
    closeUpload: () => void;
}

interface ICentralAreaState {
    images: string[];
    openedPicture: openedPicture
    isOpenPicture: boolean
}

class CentralArea extends PureComponent<ICentralAreaProps, ICentralAreaState>{

    state = {
        images: [],
        openedPicture: {name:"", index: -1 },
        isOpenPicture: false
    }

    async componentWillMount(){
        await this.getImages();
    }

    render(): React.ReactNode {
        return (
            <div className="main_back" id="main_back">
                {this.state.images.map((item:string, index:number) =>
                {return <Picture image={item} index={index} openPicture={this.openPictureHandler}  />})}
                {this.state.isOpenPicture?
                    <OpenedPicture name={this.state.openedPicture.name}
                                   index={this.state.openedPicture.index}
                                   closePicture={this.closeOpenedPicture}
                                   delete={this.deleteHandler}
                                   scrolLeft={this.scrolLeftHandler}
                                   scrolRight={this.scrolRightHandler}
                                   getImages={this.getImages}        />
                                   :null}
                {this.props.isOpenUpload?<UploadPanel getImages={this.getImages} api={this.props.api} closeUpload={this.props.closeUpload} />:null}
            </div>
        );
    }

    private getImages = async ():Promise<void> => {
        const images = await this.props.api.getImagesAsync();
        this.setState({
            images: images
        });
    }

    private openPictureHandler = (name:string, index:number):void => {
        this.setState({
            openedPicture: {name:name, index: index },
            isOpenPicture: true
        });
    }

    private closeOpenedPicture = ():void => {
        this.setState({
            isOpenPicture: false,
            openedPicture: {name:"", index: -1 }
        });
    }

    private scrolLeftHandler = ():void => {
        let index = this.state.openedPicture.index-1;
        let name = this.state.images[index];
        if(index>-1) {
            this.setState({
                openedPicture: {name: name, index: index}
            });
        }
    }

    private scrolRightHandler = ():void => {
        let index = this.state.openedPicture.index+1;
        let name = this.state.images[index];
        if(index<this.state.images.length) {
            this.setState({
                openedPicture: {name: name, index: index}
            });
        }
    }

    private deleteHandler = async ():Promise<void> => {
        await this.props.api.deleteImage(this.state.openedPicture.name);
        this.closeOpenedPicture();
    }

}

export default CentralArea;
