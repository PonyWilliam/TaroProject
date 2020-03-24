import Taro, { Component } from '@tarojs/taro'
import { View,Picker } from '@tarojs/components'
import { ClSelect,ClInput, ClCard,ClAnimation, ClButton } from "mp-colorui";
import {AtButton} from 'taro-ui'
import './grade.scss'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          num:null,
          pwd:null,
          showres:false,
          res:null
        }
      }
  config = {
    navigationBarTitleText: '成绩查询'
  }
  componentWillMount(){
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
      withShareTicket:true
    })
  }
  submit(){
    if(!this.state.num||!this.state.pwd){
      Taro.showModal({
        title:'提示',
        content:"请输入账号或密码"
      })
    }else{
      Taro.request({
        url:'https://nc.lllui.cn/url?url=http://nc.lllui.cn:5555',
        method:'POST',
        data:{
          user:this.state.num,
          pwd:this.state.pwd
        },
        success:res=>{
          if(res.data == 'error'){
            Taro.showModal({
              title:'提示',
              content:'账号或密码错误'
            })
          }else{
            this.setState({
              res:res.data,
              showres:true
            })
            //处理数据
          }
        }
      })
    }
  }
  changenum(val){
      this.setState({
          num:val
      })
  }
  changepwd(val){
    this.setState({
        pwd:val
    })
}
  render () {
    /*
            Array(11)
            0: "38" - 课程序号
            1: "2019-2020-1" -学期号
            2: "J100033" - 课程编号
            3: "微视频制作与传播" - 课程名称
            4: "93" - 成绩
            5: "1.5" - 学分
            6: "24" - 课时
            7: "4.3" - 绩点
            8: "考查" - 类型
            9: "必修" - 选修/必修
            10: "公共课" - 课程类型
            */
    let result = null
    if(this.state.showres){
      let temp = [...this.state.res].map((item)=>{
        console.log(item)
        return <ClAnimation duration={0.15} delay={(item[0]-1)*0.15}><ClCard>{item[3]}  {item[4]}  {item[5]}  {item[7]} {item[6]} {item[8]}</ClCard></ClAnimation>
      })

      result = <View className="result">
        
        <ClCard>课程名 成绩 学分 绩点 课时 类型</ClCard>
          {temp}
      </View>
    }else{
      result = <View className="ad">
                    <ClAnimation type="scale-down" delay={0.8} duration={0.4}>
      <ad unit-id="0e3112647d7098f931b3f14808a8b0e6" type="card"></ad></ClAnimation>
    </View>
    }
    return (
        
        <View className = "grade">
              <ClAnimation type="slide-left" duration={0.3}>
            <ClInput title="学号:" onChange={this.changenum.bind(this)}></ClInput>
              </ClAnimation>
              <ClAnimation type="slide-left" delay={0.3} duration={0.3}>
            <ClInput title="密码:" onChange={this.changepwd.bind(this)}></ClInput>
              </ClAnimation>
              <ClAnimation type="shake" delay={0.6} duration={0.2}>
            <View className="submit"><ClButton onClick={this.submit.bind(this)}>查询</ClButton></View>
              </ClAnimation>
            {result}
            
        </View>
    )
  }
  
}
