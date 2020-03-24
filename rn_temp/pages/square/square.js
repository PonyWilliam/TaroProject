import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { AtTabBar } from 'taro-ui';
import squareStyleSheet from "./square_styles";
import Skeleton from 'taro-skeleton';
var _styleSheet = squareStyleSheet;
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 1
    };
  }

  handleClick(value) {
    if (value == 0) {
      Taro.navigateTo({
        url: '/pages/index/index'
      });
    } else if (value == 2) {
      Taro.navigateTo({
        url: '/pages/mine/mine'
      });
    }
  }
  render() {
    const numbers = [...Array(100).keys()]; //0,1,2,3,4,5...,100
    return <View>
        <Skeleton title avatar row={3} />

       <AtTabBar fixed tabList={[{ title: '首页', iconType: 'home' }, { title: '广场', iconType: 'iphone' }, { title: '我的', iconType: 'user' }]} onClick={this.handleClick.bind(this)} current={this.state.current} />
      </View>;
  }
};
Index.config = {
  navigationBarTitleText: "广场"
};
export { Index as default };