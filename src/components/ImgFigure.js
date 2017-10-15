import React from 'react';

class ImgFigure extends React.Component{
    render(){
        return (<figure>
            <img src={this.props.data.imageURL} alt={this.props.data.title}/>
            <figcaption>
                <h2>{this.props.data.title}</h2>
            </figcaption>
        </figure>)
    }

}
ImgFigure.defaultProps={
    data:[]
}
export default ImgFigure;