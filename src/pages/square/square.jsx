import Taro, { Component,Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'
import {AtButton,AtTabBar,AtGrid} from 'taro-ui'
import './square.scss'
import Skeleton from 'taro-skeleton'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current:1
    }
  }
  config={
    navigationBarTitleText:"广场"
  }
  componentWillMount(){
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
      withShareTicket:true
    })
  }
  handleClick(value){
    if(value==0){
      Taro.redirectTo({
        url:'/pages/index/index'
      })
    }else if(value==2){
      Taro.redirectTo({
        url:'/pages/mine/mine'
      })
    }
  }
  render () {
    const numbers = [...Array(100).keys()]//0,1,2,3,4,5...,100
    return (
      <View>
        广场功能将在下个版本开放(已开发完成，正在升级服务器安全性保证用户安全)
        <Skeleton title avatar row={3} />
        <Skeleton title avatar row={3} />
        
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
