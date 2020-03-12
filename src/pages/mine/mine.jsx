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
  componentWillMount(){
    
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
