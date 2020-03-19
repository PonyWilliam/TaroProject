import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton  } from "mp-colorui";
import './xiaoshuo.scss'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
        }
      }
  config = {
    navigationBarTitleText: '小说阅读'
  }

  render () {
    return (
        <View className = "xiaoshuo">
          <ClButton>123</ClButton>
        </View>
    )
  }
  
}
