import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image } from "@tarojs/components-rn";
import { findAllType } from "../../../client";
import { AtSearchBar } from "taro-ui";
import TaroSdk from "../../../utils/wxSdk";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = class Index extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      types: [],
      value: ""
    }, _temp;
  }

  componentWillMount() {}

  componentDidMount() {
    this.fetchTypes();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  fetchTypes() {
    findAllType().then(res => {
      this.setState({
        types: res.data
      });
    });
  }

  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    if (!this.state.value) {
      return;
    }
    Taro.navigateTo({
      url: `../search/index?val=${this.state.value}`
    });
  }

  onSearch(e) {
    Taro.navigateTo({
      url: `../search/index?val=${e.currentTarget.dataset.title}`
    });
  }

  onNav(id) {
    Taro.navigateTo({
      url: `../detail/index?id=${id}`
    });
  }

  onPhotograph() {
    TaroSdk.chooseImage().then(res => {
      console.log(res);
      if (res) {
        Taro.navigateTo({
          url: `../result/index?path=${res}`
        });
      } else {
        Taro.showToast({
          title: "请上传图片",
          icon: "error",
          duration: 1000
        });
      }
    });
  }
  render() {
    return <View style={_styleSheet["rubbish"]}>
        <View style={_styleSheet["search"]}>
          <AtSearchBar showActionButton placeholder="请输入正确名称（包括材质）" value={this.state.value} onChange={this.onChange.bind(this)} onActionClick={this.onActionClick.bind(this)} />
          <View style={[_styleSheet["icon"], _styleSheet["flex"]]}>
            <View onClick={this.onPhotograph} style={[_styleSheet["icon_item"], _styleSheet["flex"], _styleSheet["flex__direction--column"], _styleSheet["flex__justify--center"], _styleSheet["flex__align--center"]]}>
              <View style={_styleSheet["photo_img"]} />
              拍照识别
            </View>
          </View>
        </View>
        <View style={_styleSheet["hot-search"]}>
          <View style={_styleSheet["hot-search_title"]}>热门搜索</View>
          <View style={[_styleSheet["hot-search_item"], _styleSheet["flex"], _styleSheet["flex--warp"]]}>
            <View onClick={this.onSearch} data-title="面膜" style={_styleSheet["item"]}>
              面膜
            </View>
          </View>
        </View>
        <View style={_styleSheet["content"]}>
          <View style={_styleSheet["content_title"]}>日常垃圾分类指南</View>
          <View style={[_styleSheet["flex"], _styleSheet["flex--wrap"]]}>
            {this.state.types.map(item => <View onClick={this.onNav.bind(this, item.id)} key={item.id} style={[_styleSheet["item"], _styleSheet["flex"], _styleSheet["flex__justify--between"]]}>
                <View style={_styleSheet["flex"]}>
                  <View style={_styleSheet["item_image"]}>
                    <Image src={item.icon} />
                  </View>
                  <View style={[_styleSheet["item_text"], _styleSheet["flex"], _styleSheet["flex__direction--column"]]}>
                    <Text>{item.title}</Text>
                    <Text style={_styleSheet["text_english"]}>{item.english}</Text>
                  </View>
                </View>
                <View style={_styleSheet["icon"]}>
                  <Image src="https://ws4.sinaimg.cn/large/006a7eb0ly1g4qgt9xu5qj305k05kmwy.jpg" />
                </View>
              </View>)}
          </View>
          <View style={_styleSheet["remarks"]}>
            备注：湿垃圾（又名厨余垃圾、易腐垃圾、餐厨垃圾），干垃圾（又名其他垃圾），生活垃圾分类同时包括：装修垃圾和大件垃圾
          </View>
          <View style={_styleSheet["footer_text"]}>
            参与垃圾分类，保护地球家园，共创美好未来
          </View>
        </View>
                </View>;
  }
};
Index.options = {
  addGlobalClass: true
};
Index.config = {
  navigationBarTitleText: "垃圾分类指南"
};
export { Index as default };