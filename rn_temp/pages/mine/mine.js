import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { AtListItem, AtTabBar } from 'taro-ui';
import mineStyleSheet from "./mine_styles";
var _styleSheet = mineStyleSheet;
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 2,
      can: false
    };
  }

  componentWillMount() {
    Taro.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          this.setState({
            can: true
          });
        } else {
          this.setState({
            can: false
          });
        }
      }
    });
  }
  handleClick(value) {
    if (value == 1) {
      Taro.navigateTo({
        url: '/pages/square/square'
      });
    } else if (value == 0) {
      Taro.navigateTo({
        url: '/pages/index/index'
      });
    }
  }
  getUser(e) {
    console.log(e.detail.userInfo);
    if (e.detail.userInfo) {
      //成功获取信息
      Taro.login({
        success: res => console.log(res)
      });
      this.setState({
        can: true
      });
    }
  }
  render() {
    let login = null;

    if (!this.state.can) {
      login = <View class="login">
        <Button openType="getUserInfo" onGetUserInfo={this.getUser.bind(this)} circle>
          授权登录
        </Button>
        </View>;
    } else {
      login = <View></View>;
    }
    return <View>
      {login}
      <AtList>
        <AtListItem title="昵称" arrow="right" onClick={this.handleClick} />
        <AtListItem title="签名" arrow="right" />
        <AtListItem title="头像" arrow="right" thumb="" />
        <AtListItem title="个人说明" arrow="right" />
      </AtList>

       <AtTabBar fixed tabList={[{ title: '首页', iconType: 'home' }, { title: '广场', iconType: 'iphone' }, { title: '我的', iconType: 'user' }]} onClick={this.handleClick.bind(this)} current={this.state.current} />
      </View>;
  }
};
Index.config = {
  navigationBarTitleText: '我的'
};
export { Index as default };