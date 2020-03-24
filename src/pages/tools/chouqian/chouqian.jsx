import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import {AtCard,AtSearchBar,AtAccordion,AtList, AtListItem,AtButton } from 'taro-ui'
import {ClAnimation} from 'mp-colorui'
import './chouqian.scss'
export default class Mine extends Component {
    
    constructor () {
        super(...arguments)
        this.state = {
            showbutton:true,
            isOpened:false,
            haveresult:false,
            result:{title:'',content:'',extract:''}
        }
      }
      componentWillMount(){
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
            withShareTicket:true
          })
        let date = new Date()
        let time = date.getFullYear()+date.getMonth+date.getDate()
        let that = this
        Taro.getStorage({
            key:"day",
            success:res=>{
                if(res.data == time){
                    //相等说明今天已经抽签过了.
                    this.setState({
                        isOpened:false,
                        haveresult:true,
                        showbutton:false
                    })
                    Taro.getStorage({
                        key:'result',
                        success:function(res){
                            if(res.data==1){
                                that.setState({
                                    result:{title:"上上签",content:`
                                        事宜素定合天机，休听师巫说是非。\n
                                    　　遵正不依他大道，自然门户发光辉。\n
                                    　　月满今宵离海边，时人感仰丽春天。\n
                                    　　清光烁处群星退，君子营谋便得官。\n
                                    　　去年曾在此闲居，今日因来作故闲。\n
                                    　　便好求财居福禄，亚人已被恶人驱。\n`}
                                })
                            }else if(res.data == 2){
                                that.setState({
                                    result:{title:"中平签",content:`
                                    蓬莱三岛客，万里走江山。\n
                                    秋风秋月起，移岭过前江。\n
                                    `}
                                })
                            }else{
                                that.setState({
                                    result:{title:"上平签",content:`
                                    茍有可观，皆有右乐。\n
                                    匪必瑰奇假丽者也。
                                    `}
                                })
                            }
                        }
                    })
                }else{
                    //说明今天没抽，基本不需要做处理。但是为了防止昨天的数据残留，所以把缓存清了
                    Taro.clearStorage()
                    try {
                    Taro.clearStorageSync()
                    } catch(e) {
                    // Do something when catch error
                    Taro.showModal({
                        title:"错误",
                        content:"我们遇到了一个错误:"+e,
                        success:res=>{
                            
                        }
                    })
                    }
                }
            }
        })
      }
  config = {
    navigationBarTitleText: '抽签'
  }
  chou(){
      this.setState({
          showbutton:false,
          isOpened:true
      })
      
  }
  chou2(){
    let date = new Date();
    let num = Math.ceil(Math.random()*100)
    let that = this
    if(num <20){
        Taro.setStorageSync({})
        try{
            Taro.setStorageSync('result','1')
        }catch(e){

        }
        that.setState({
            result:{title:"上上签",content:`
                事宜素定合天机，休听师巫说是非。\n
            　　遵正不依他大道，自然门户发光辉。\n
            　　月满今宵离海边，时人感仰丽春天。\n
            　　清光烁处群星退，君子营谋便得官。\n
            　　去年曾在此闲居，今日因来作故闲。\n
            　　便好求财居福禄，亚人已被恶人驱。\n`}
        })
    }else if(num < 70){
        try{
            Taro.setStorageSync('result','2')
        }catch(e){

        }
        that.setState({
            result:{title:"中平签",content:`
            蓬莱三岛客，万里走江山。\n
            秋风秋月起，移岭过前江。\n
            `}
        })
    }else{
        try{
            Taro.setStorageSync('result','3')
        }catch(e){

        }
        that.setState({
            result:{title:"上平签",content:`
            茍有可观，皆有右乐。\n
            匪必瑰奇假丽者也。
            `}
        })
    }
    try{
        
        Taro.setStorageSync('day',String(date.getFullYear()+date.getMonth+date.getDate()))
    }catch(e){

    }
      this.setState({
          isOpened:false,
          haveresult:true,
          showbutton:false,
          
      })
  }
  render () {
    let button = null
    let res = null
    let content = null
    if(this.state.showbutton){
        
        button = 
            <Button className="button" onClick={this.chou.bind(this)}>抽签</Button> 
    }else{
        button = <View></View>
    }
    if(this.state.isOpened){
        res = <AtCurtain
        isOpened={true}
    >
        <Image
        style='width:100%;height:250px'
        src="https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/qian/qian.jpg"
        onClick={this.chou2.bind(this)}
        />
    </AtCurtain>
    }
    if(this.state.haveresult){
        content = 
        <ClAnimation type="scale-top" delay={0} duration={0.3}>
        <AtCard className="card" 
        title={this.state.result.title}
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
            {this.state.result.content}
        </AtCard>
        </ClAnimation>

    }
    return (
        <View className = "chouqian">
            {button}
            {res}
            {content}
            <ClAnimation type="scale-down" duration={0.4} delay={0.3}>
            <ad unit-id="bb5f38bc59fd661653e483291ff90a82"></ad>
            </ClAnimation>
        </View>
    )
  }
  
}
