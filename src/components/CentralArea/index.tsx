import React from 'react';
import {PureComponent, Component} from "react";
import './style.css';
import Api from "../../Api";
import Picture from "./Picture";

interface ICentralAreaProps {
    api: Api;
}

interface ICentralAreaState {
    images: string[];
}

class CentralArea extends PureComponent<ICentralAreaProps, ICentralAreaState>{

    state = {
        images: []
    }

    async componentWillMount(): Promise<void> {
        const images = await this.props.api.getImagesAsync();
        this.setState({
            images: images
        })
    }

    render(): React.ReactNode {
        return (
            <div className="main_back" id="main_back">
                {this.state.images.map((item:string) => {return <Picture image={item} />})}
            </div>
        );
    }
}

export default CentralArea;
