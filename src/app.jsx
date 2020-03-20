import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import Mine from './pages/mine'

import http from "@/utils/http";
import "./style/style.scss";
import TaroSdk from "./utils/wxSdk";

import 'taro-ui/dist/style/index.scss'//taro-ui
import "mp-colorui/dist/style/index.scss";//color-ui
import './app.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      "pages/square/square",
      'pages/mine/mine',
      "pages/qd/qd",
      "pages/photo/photo",
      'pages/tools/express/express',
      "pages/tools/weather/weather",
      "pages/tools/weizhang/weizhang",
      "pages/tools/chouqian/chouqian",
      "pages/tools/xiaoshuo/xiaoshuo",
      "pages/tools/history/history",
      "pages/tools/rubbish/index",
      "pages/tools/search/index",
      "pages/tools/result/index",
      "pages/tools/detail/index"

    ],
    permission: {
      "scope.userLocation": {
        "desc": "您的位置信息将用于天气查询"
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
