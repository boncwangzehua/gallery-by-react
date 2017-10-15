require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';
//获取json中的数据
var imagesDatas = require('../datas/imagesDatas.json');
//通过自执行函数根据json中的数据生成images的URL
imagesDatas = (function genImageURL(imageDataArr){
    for(var i = 0, j = imageDataArr.length; i < j; i++){
      var singleImageData = imageDataArr[i];
      singleImageData.imageURL = require('../images/'+ singleImageData.fileName);
      imageDataArr[i] = singleImageData[i];
    }
    return imageDataArr;
})(imagesDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="contorller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
