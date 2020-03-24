import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { ClSearchBar } from "mp-colorui";
import xiaoshuoStyleSheet from "./xiaoshuo_styles";
var _styleSheet = xiaoshuoStyleSheet;
let Mine = class Mine extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  onSearch(val) {
    console.log(val);
  }
  render() {
    //利用search的缓存存储我的书架。
    return <View style={_styleSheet["xiaoshuo"]}>
          <ClSearchBar shape="round" placeholder="请输入你要查找的小说名" onSearch={this.onSearch.bind(this)} />
        <View class="my">
          
        </View>
        </View>;
  }

};
Mine.config = {
  navigationBarTitleText: '小说阅读'
};
export { Mine as default };