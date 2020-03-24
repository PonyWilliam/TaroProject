import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image, Input } from "@tarojs/components-rn";
import TaroSdk from "../../../utils/wxSdk";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Result = class Result extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      path: "",
      data: [],
      value: ""
    }, _temp;
  }

  componentWillMount() {
    if (this.$router.params.path) {
      this.setState({
        path: this.$router.params.path
      });
      var time = Taro.getStorageSync("time");
      var accessToken = Taro.getStorageSync("access_token");
      var curTime = new Date().getTime();
      var timeNum = new Date(parseInt(curTime - time) * 1000).getDay();
      if (timeNum > 28 || !accessToken) {
        TaroSdk.getBaiduToken();
      } else {
        this.uploadFile({
          token: accessToken,
          file: this.$router.params.path
        });
      }
    } else {
      Taro.navigateBack();
    }
  }

  uploadFile(params) {
    TaroSdk.aiPhoto(params).then(res => {
      this.setState({
        data: res.result
      });
    });
  }

  onSearch(val) {
    Taro.redirectTo({
      url: `../search/index?val=${val}`
    });
  }

  onNext() {
    const value = this.state.value ? this.state.value : this.state.data[0].keyword;
    Taro.redirectTo({
      url: `../search/index?val=${value}`
    });
  }

  onChange(e) {
    this.setState({
      value: e.detail.value
    });
  }

  render() {
    return <View style={_styleSheet["result"]}>
      <View style={_styleSheet["container"]}>
        <View style={[_styleSheet["preview"], _styleSheet["flex"], _styleSheet["flex__align--center"], _styleSheet["flex__justify--center"]]}>
          <Image mode="aspectFit" src={this.state.path} />
        </View>
        <View style={_styleSheet["content"]}>
          <View style={_styleSheet["content_tile"]}>
            <View style={_styleSheet["title"]}>你的垃圾是</View>
            {this.state.data.length !== 0 && <View style={_styleSheet["content_val"]}>{this.state.data[0].keyword}</View>}
          </View>

          <View style={_styleSheet["content_item"]}>
            <View style={_styleSheet["title"]}>不对么，那么是不是</View>

            <View style={[_styleSheet["flex"], _styleSheet["flex--wrap"]]}>
              {this.state.data.map(item => <View onClick={this.onSearch.bind(this, item.keyword)} key={item.score} style={_styleSheet["item"]}>
                  {item.keyword}
                </View>)}
            </View>
          </View>

          <View style={_styleSheet["content_footer"]}>
            <Input onInput={this.onChange.bind(this)} value={this.state.value} placeholder="蠢AI让我们人类告诉你是什么" />
          </View>
        </View>

        <View onClick={this.onNext} style={_styleSheet["btn_next"]}>
          下一步
        </View>
      </View>
      </View>;
  }
};
export { Result as default };