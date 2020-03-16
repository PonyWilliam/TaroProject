import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {AtCard,AtSearchBar,AtAccordion,AtList, AtListItem,AtButton } from 'taro-ui'
import './weizhang.scss'
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
        <View className = "weizhang">
            
        </View>
    )
  }
  
}
