import Taro, { Component,Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'
import {AtButton,AtTabBar,AtGrid} from 'taro-ui'
import './mine.scss'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current:2
    }
  }
  handleClick(value){
    if(value==1){
      Taro.navigateTo({
        url:'/pages/square/square'
      })
    }else if(value==0){
      Taro.navigateTo({
        url:'/pages/index/index'
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
