import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image } from "@tarojs/components-rn";

import { fetchDetail } from "../../../client";
import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Detail = class Detail extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      data: {}
    }, _temp;
  }

  componentWillMount() {
    this.fetchDetail(this.$router.params.id);
  }

  fetchDetail(id) {
    fetchDetail(id).then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  render() {
    return <View>
        <View style={_styleSheet["content"]}>
          <View style={_styleSheet["detail_content--title"]}>{this.state.data.title}</View>
          <View style={[_styleSheet["detail-content-image"], _styleSheet["flex"], _styleSheet["flex__align--center"], _styleSheet["flex__justify--center"]]}>
            <Image src={this.state.data.image} />
          </View>
          <View style={_styleSheet["detail_content--description"]}>
            {this.state.data.description}
          </View>
          <View style={_styleSheet["detail_put--in"]}>
            <View style={_styleSheet["title"]}>{this.state.data.title}投放指南</View>
            {this.state.data.details.map(item => <View key={item.id} style={_styleSheet["itme"]}>
                {item.text}
              </View>)}
          </View>
        </View>
      </View>;
  }
};
export { Detail as default };