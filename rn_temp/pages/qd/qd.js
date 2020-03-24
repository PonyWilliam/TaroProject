import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";

import qdStyleSheet from "./qd_styles";
var _styleSheet = qdStyleSheet;
let Mine = class Mine extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }


  render() {
    return <View style={_styleSheet["qd"]}>
            
        </View>;
  }

};
Mine.config = {
  navigationBarTitleText: 'qq打卡'
};
export { Mine as default };