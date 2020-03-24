import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";

import weizhangStyleSheet from "./weizhang_styles";
var _styleSheet = weizhangStyleSheet;
let Mine = class Mine extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }


  render() {
    return <View style={_styleSheet["weizhang"]}>
            
        </View>;
  }

};
Mine.config = {
  navigationBarTitleText: '违章查询'
};
export { Mine as default };