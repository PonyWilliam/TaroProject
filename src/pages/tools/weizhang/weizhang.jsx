import Taro, { Component } from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import { ClSelect,ClInput, ClCard,ClAnimation } from "mp-colorui";
import {AtButton} from 'taro-ui'
import './weizhang.scss'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        /*
       
        02:小型车
        52:小型新能源
        01:大型汽车
        51:大型性能与
        */
        this.state = {
          single: ['湘', '粤', '晋', '桂'],
          car:['小型车','小型新能源','大型汽车','大型新能源'],
          carnum:['02','52','01','51'],
          url:['hn','gd','sx','sx'],
          selectorChecked:0,
          carChecked:0,
          result:null,
          showresult:false,
          fdjh:null,
          carnum2:null
        }
      }
  config = {
    navigationBarTitleText: '违章查询'
  }
  componentWillMount(){
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
      withShareTicket:true
    })
  }
  onChange(val){
    console.log(val)
    
  }
  selectchange(e){
    console.log(e)
    this.setState({
      selectorChecked:e
    })
  }
  carchange(e){
    console.log(e)
    this.setState({
      carChecked:e
    })
  }
  req(){
    /*
            url = self.get_argument('url')
           hpzl = self.get_argument('hpzl')
           hphm1b = self.get_argument('h1')
            hphm = self.get_argument('h2')
             fdjh = self.get_argument('fdjh')
    */
   if(!this.state.carnum2||!this.state.fdjh){
     Taro.showModal({
       title:'错误',
       content:'请完整填写信息'
     })
     return
   }
    Taro.request({
      //http://nc.lllui.cn:5555/jtxt
      
      url:`https://nc.lllui.cn/url?url=http://nc.lllui.cn:5555/jtxt`,
      method:'POST',
      data:{
        url:this.state.url[this.state.selectorChecked],
        hpzl:this.state.carnum[this.state.carChecked],
        h1:this.state.carnum2,
        h2:this.state.single[this.state.selectorChecked]+this.state.carnum2,
        fdjh:this.state.fdjh
      },
      success:res=>{
        console.log(res)
        if(res.data.code == 1){
          this.setState({
            result:res.data.msg,
            showresult:true
          })
        }else{
          Taro.showModal({
            title:'错误提示',
            content:res.data.msg
          })
        }
      }
    })
  }
  fdjhchange(val){
    this.setState({
      fdjh:val
    })
  }
  carnumcchange(val){
    this.setState({
      carnum2:val
    })
  }
  render () {
    let showcard = null
    if(this.state.showresult){
      showcard = <View className="result">
      <ClCard title={{
        align:"center",
        text:"查询结果"
      }}>
        {this.state.result}
      </ClCard>
    </View>
    }
    return (
        <View className = "weizhang">
            <ClAnimation duration={0.5} type="scale-up">
            <ClSelect selector=
            {{ range: this.state.single }}
            mode="selector"
            title="选择地区"
            onChange = {this.selectchange.bind(this)}
            >
            
  </ClSelect>
  <ClSelect selector={{range:this.state.car}}
            mode="selector"
            title="车辆类型"
            onChange = {this.carchange.bind(this)}
            ></ClSelect>
            <ClInput title="车牌号(加地区字母)" placeholder="A88888" onChange={this.carnumcchange.bind(this)} />
            <ClInput title="发动机号后6位" placeholder="666666" onChange={this.fdjhchange.bind(this)}/>
          <View className="submit"><AtButton type="primary" size="normal" round onClick={this.req.bind(this)}>查询</AtButton></View>
          </ClAnimation>
          <ClAnimation type="shake" duration={0.5} delay={0.5}>
          {showcard}
          </ClAnimation>
          
          <ClAnimation delay={0.6} duration={0.4}>
          <View className="ad">
            <ad unit-id="87fff26b165e476af1e93ee93e5515b9"></ad>
          </View>
          </ClAnimation>
        </View>
    )
  }
  
}
