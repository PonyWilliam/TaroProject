import Taro, { Component,Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'
import {AtButton,AtTabBar,AtGrid} from 'taro-ui'
import './square.scss'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current:1
    }
  }
  handleClick(value){
    if(value==0){
      Taro.navigateTo({
        url:'/pages/index/index'
      })
    }else if(value==2){
      Taro.navigateTo({
        url:'/pages/mine/mine'
      })
    }
  }
  render () {
    const numbers = [...Array(100).keys()]//0,1,2,3,4,5...,100
    return (
      <View>
       <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType:'home'},
            { title: '广场', iconType: 'iphone'},
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
