import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Block, Image } from "@tarojs/components-rn";
import { serachDetail } from "../../../client";
import { AtSearchBar } from "taro-ui";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Search = class Search extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      data: {},
      value: ""
    }, _temp;
  }

  componentWillMount() {
    if (this.$router.params.val) {
      this.setState({
        value: this.$router.params.val
      });
      this.serachDetail(this.$router.params.val);
    } else {
      Taro.navigateBack();
    }
  }

  onChange(val) {
    if (!val) {
      Taro.navigateBack();
    }
    this.setState({
      value: val
    });
  }

  onActionClick() {
    if (!this.state.value) {
      return;
    }
    this.serachDetail(this.state.value);
  }

  serachDetail(val) {
    serachDetail({
      title: val
    }).then(res => {
      this.setState({
        data: res.data ? res.data : ""
      });
    });
  }
  render() {
    return <View style={_styleSheet["searchall"]}>
        <View style={_styleSheet["search"]}>
          <AtSearchBar showActionButton placeholder="请输入正确名称（包括材质）" value={this.state.value} onChange={this.onChange.bind(this)} onActionClick={this.onActionClick.bind(this)} />
        </View>
        {Object.keys(this.state.data).length === 0 ? <Block>
            <View style={[_styleSheet["type"], _styleSheet["flex"], _styleSheet["flex__direction--column"], _styleSheet["flex__justify--center"], _styleSheet["flex__align--center"]]}>
              <View style={_styleSheet["title"]}>{this.state.value}</View>
              <View style={_styleSheet["type_title"]}>未搜索到分类</View>
              <View style={_styleSheet["description"]}>
                物品太过独特，词库紧急补充中...
              </View>
            </View>
          </Block> : <Block>
            <View style={[_styleSheet["type"], _styleSheet["flex"], _styleSheet["flex__direction--column"], _styleSheet["flex__justify--center"], _styleSheet["flex__align--center"]]}>
              <View style={_styleSheet["title"]}>{this.state.data.title}</View>
              <View style={_styleSheet["type_title"]}>
                属于{this.state.data.type.title}
              </View>
              <Image src={this.state.data.type.image} />
            </View>
            <View style={_styleSheet["put"]}>
              <View style={_styleSheet["put-type_title"]}>
                {this.state.data.type.title}投放指导
              </View>
              {this.state.data.type.details.map(item => <View key={item.id} style={_styleSheet["item"]}>
                  {item.text}
                </View>)}
            </View>
          </Block>}
      </View>;
  }
};
export { Search as default };