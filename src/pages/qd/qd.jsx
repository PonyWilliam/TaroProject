import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {AtCard,AtSearchBar,AtAccordion,AtList, AtListItem,AtButton } from 'taro-ui'
import './qd.scss'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
        }
        
      }
  config = {
    navigationBarTitleText: 'qq打卡'
  }

  render () {
    return (
        <View className = "qd">
            
        </View>
    )
  }
  
}
