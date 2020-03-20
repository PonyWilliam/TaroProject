import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import pagesToolsDetailIndex from './pages/tools/detail/index';
import pagesToolsResultIndex from './pages/tools/result/index';
import pagesToolsSearchIndex from './pages/tools/search/index';
import pagesToolsRubbishIndex from './pages/tools/rubbish/index';
import pagesToolsHistoryHistory from './pages/tools/history/history';
import pagesToolsXiaoshuoXiaoshuo from './pages/tools/xiaoshuo/xiaoshuo';
import pagesToolsChouqianChouqian from './pages/tools/chouqian/chouqian';
import pagesToolsWeizhangWeizhang from './pages/tools/weizhang/weizhang';
import pagesToolsWeatherWeather from './pages/tools/weather/weather';
import pagesToolsExpressExpress from './pages/tools/express/express';
import pagesPhotoPhoto from './pages/photo/photo';
import pagesQdQd from './pages/qd/qd';
import pagesMineMine from './pages/mine/mine';
import pagesSquareSquare from './pages/square/square';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";

import appStyleSheet from "./app_styles"; //taro-ui
//color-ui
var _styleSheet = appStyleSheet;

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

let App = class App extends Component {
  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TCRNProvider>
                  <RootStack />
                </TCRNProvider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

};
App.config = {
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
  } };
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/square/square', pagesSquareSquare], ['pages/mine/mine', pagesMineMine], ['pages/qd/qd', pagesQdQd], ['pages/photo/photo', pagesPhotoPhoto], ['pages/tools/express/express', pagesToolsExpressExpress], ['pages/tools/weather/weather', pagesToolsWeatherWeather], ['pages/tools/weizhang/weizhang', pagesToolsWeizhangWeizhang], ['pages/tools/chouqian/chouqian', pagesToolsChouqianChouqian], ['pages/tools/xiaoshuo/xiaoshuo', pagesToolsXiaoshuoXiaoshuo], ['pages/tools/history/history', pagesToolsHistoryHistory], ['pages/tools/rubbish/index', pagesToolsRubbishIndex], ['pages/tools/search/index', pagesToolsSearchIndex], ['pages/tools/result/index', pagesToolsResultIndex], ['pages/tools/detail/index', pagesToolsDetailIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;