import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClButton,ClSearchBar  } from "mp-colorui";
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
  onSearch(val){
    console.log(val)
    
  }
  render () {
    //利用search的缓存存储我的书架。
    return (
        <View className = "xiaoshuo">
          <ClSearchBar
          shape='round'
          placeholder='请输入你要查找的小说名'
          onSearch={this.onSearch.bind(this)}
          />
        <View class="my">
          
        </View>
        </View>
        
    )
  }
  
}
