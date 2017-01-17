require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
let imagesDatas = require('../data/imageData.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imagesDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);

		imageDatasArr[i] = singleImageData;  
	}

	return imageDatasArr;
})(imagesDatas);


class AppComponent extends React.Component {
  render() {
    return (
    	 <section className = "stage" ref = "stage" >
    	  < section className = "img-sec" > < /section> 
    	   < nav className = "controller-nav" > < /nav> 
    	  < /section >
    );
  }
}

AppComponent.defaultProps = {
};


export default AppComponent;
