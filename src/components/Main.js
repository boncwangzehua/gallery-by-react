require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure.js';
//获取json中的数据
var imagesDatas = require('../datas/imagesDatas.json');

//通过自执行函数根据json中的数据生成images的URL
function genImageURL(imageDataArr){
    var arr = eval(imageDataArr);
    for(var i = 0, j = arr.length; i < j; i++){
      var singleImageData = arr[i];
      singleImageData.imageURL = require('../images/'+ singleImageData.fileName);
      arr[i] = singleImageData;
    }
    return arr;
};
imagesDatas = genImageURL(imagesDatas);
class AppComponent extends React.Component {
  render() {
    let contorllerUnits = [],
        imgFigures = [];
    imagesDatas.map(function(value,index) {
      imgFigures.push(<ImgFigure key={index} data={value}/>);
    }, this);
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="contorller-nav">
          {contorllerUnits}
        </nav>
        <span>test</span>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
