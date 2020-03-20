import Taro, { Component,Config } from '@tarojs/taro'
import { View, Text,Swiper, SwiperItem,Image } from '@tarojs/components'
import {AtButton,AtTabBar,AtGrid,AtFloatLayout } from 'taro-ui'
import {ClSwiper,ClAnimation} from 'mp-colorui'
import './index.scss'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      joke:false,
      jokecontent:[{title:"",text:""}],
      random:0,
      random2:0
    }
  }
  handleClick (value) {
    if(value==1){
      Taro.navigateTo({
        url:'/pages/square/square'
      })
    }else if(value==2){
      Taro.navigateTo({
        url:'/pages/mine/mine'
      })
    }
  }
  config = {
    navigationBarTitleText: '首页',
  }
  test = (item,index,e)=>{
    if(index == 0){
      //express
      Taro.navigateTo({
        url:'/pages/tools/express/express'
      })
    }else if(index == 1){
      Taro.navigateTo({
        url:'/pages/tools/weather/weather'
      })
      //天气
    }else if(index == 2){
      //笑话
      Taro.showLoading({
        title:"笑话加载中"
      })
      this.setState({
        random2:Math.ceil(Math.random()*30)
      })
      Taro.request({
        url:'https://ali-joke.showapi.com/textJoke',
        method:"GET",
        header:{
          "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
          "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
        },
        data:{
          maxResult:50,
          page:this.state.random2
        },
        success:(res)=>{
          Taro.hideLoading()
          this.setState({
            joke:true,
            jokecontent:res.data.showapi_res_body.contentlist
          })
        }
      })
    }else if(index == 3){
      //证件照
      Taro.navigateTo({
        url:"/pages/photo/photo"
      })
    }else if(index == 4){
      Taro.navigateTo({
        url:"/pages/tools/chouqian/chouqian"
      })
    }else if(index ==5){
      //第5个小说，测试中
      Taro.navigateTo({
        url:'/pages/tools/xiaoshuo/xiaoshuo'
      })
    }else if(index == 6){
      Taro.navigateTo({
        url:'/pages/tools/history/history'
      })
    }else if(index == 7){
      //查成绩
      Taro.navigateTo({
        url:'/pages/tools/rubbish/index'
      })
    }else{
      //查违章
    }
  }
  closejoke = ()=>{
    this.setState({
      joke:false
    })
  }
  reflash = ()=>{
    this.setState({
      random:this.state.random+1
    })
  }
  render () {
    //title={this.state.jokecontent[this.state.random].text}
    let fileList = [
      {
        url: 'https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/index/222.jpg',
        type: 'image',
      },{
        url: 'https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/index/111.jpg',
        type: 'image',
      },{
        url: 'https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/index/333.jpg',
        type: 'image',
      },{
        url: 'https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/index/444.jpg',
        type: 'image',
      }
    ]
    return (
      <View>
        <AtFloatLayout isOpened={this.state.joke}  onClose={this.closejoke.bind(this)} title="笑话大全">
          <ad unit-id="56b7cba030861486cefda1fb9eb03339"></ad>
          <AtButton type="primary" size="small" onClick={this.reflash}>换一个</AtButton>
          {this.state.jokecontent[this.state.random].text}
        </AtFloatLayout>
        <ClAnimation type="scale-up" delay={0.2} duration={0.8}>
        <ClSwiper type='card' list={fileList} circular autoplay={true}/>
        </ClAnimation>
        <ClAnimation type="scale-up" delay={0.8} duration={1}>

        
      <AtGrid onClick={this.test.bind(this)} data={
  [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '查快递'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '看天气'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '看笑话'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '证件照'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '抽运势'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '看小说'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '看历史'
    },
    {
      image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      value: '垃圾分类'
    },
    {
      image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
      value: '听音乐'
    }
  ]
} />
    </ClAnimation>
      <ad unit-id="bb5f38bc59fd661653e483291ff90a82"></ad>
      
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
