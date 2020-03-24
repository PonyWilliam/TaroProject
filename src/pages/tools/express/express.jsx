import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {AtCard,AtSearchBar,AtAccordion,AtList, AtListItem } from 'taro-ui'
import {ClAnimation} from 'mp-colorui'
import './express.scss'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
          open: false,
          value:'',
          result:0,
          content:[]
        }
      }
      componentWillMount(){
        Taro.showShareMenu({
          showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
          withShareTicket:true
        })
      }
      Getreq = ()=>{
        //获取快递信息9
        
        let a = this.state.value
        if(a == "" || !a ){
            Taro.showToast({
                title:'请输入单号',
                icon:'close',
                duration:3000
            })
            return 0
        }
        Taro.showLoading({
          title:"查询中"
        })
        Taro.request({
            url:"https://kuaidid.market.alicloudapi.com/danhao",
            method:'post',
            data:{
                "src":a
            }, 
            header:{
                "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
            },
            success:(res)=>{
                Taro.hideLoading()
                if(res.data.msg == "接口错误" || res.data.msg.context==null ||res.data.msg==[]){
                    this.setState({
                      result:-1
                    })
                    Taro.showModal({
                        title:"错误",
                        content:"这可能是快递单号错误导致的或网络错误"
                    })
                    
                }else{
                  this.setState({
                      result:1,
                      content:res.data.msg.context
                  })
                }
            }
        })
      }

      handleClick (value) {
        this.setState({
          open: value
        })
        return value
      }
      handleChange(value){
          this.setState({
              value
          })
          return value
      }
  config = {
    navigationBarTitleText: '首页'
  }
    add0(m){return m<10?'0'+m:m }
    format(shijianchuo)
    {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
    }
  ReturnContent(props){
    return  <View className="time">
      {props.time}
    </View>
  }
  render () {
    const {content} = this.state
    const test = this.state.content.map((temp)=>{
      return  <View className="show">
        <View className="show_time">
          {this.format(temp.time*1000)}
        </View>
        <View className="show_content">
          {temp.desc}
        </View>
      </View>
    })
    return (
        <View className = "express">
          <ClAnimation type="scale-up" duration={0.5}>
          <AtCard
            note='小伟王'
            extra=''
            title='快递查询功能'
          >
            快递查询功能支持110种快递公司单号，目前不是很完善，希望大家可以理解！
          </AtCard>
          </ClAnimation>
          <ClAnimation type="scale-down" duration={0.6} delay={0.4}>
            <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title='支持的快递列表'
        >
          
          {this.state.content}
          <AtList hasBorder={false}>
            <AtListItem
              title='顺丰速运'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            
            <AtListItem
              title='中通快递'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='110家快递'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </AtAccordion>
        <View className="form">
            <AtSearchBar
              placeholder = "请输入快递单号"
              className="number"
              actionName='查询'
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              onActionClick={this.Getreq.bind(this)}
            />
            </View>
            </ClAnimation>
            <View className="result">
              {test}
            </View>
            <ClAnimation type="scale-down" duration={0.4} delay={0.8}>
            <ad unit-id="ee1cee38cef063fb52a57f5f9eb25425" type="card"></ad>
            </ClAnimation>
        </View>
    )
  }
  
}
