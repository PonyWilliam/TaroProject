import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClTimeline,ClAnimation  } from "mp-colorui";
import './history.scss'
let time = []
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            time:[],
            load:false
        }
      }
      componentWillUnmount(){
          this.setState({
              time:[]
          })
      }
      componentWillMount(){
          
          Taro.request({
              method:'GET',
              url:'https://ali-todayhistory.showapi.com/today-of-history',
              header:{
                "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
                },
              success:res=>{
                  console.log(res)
                  if(res.statusCode == 200){
                    //数据位置：res.datashowapi_res_body.list[].title,year,month,day
                    let color = ['oliveLight','light-red','light-blue','pinkLight','brownLight']
                    let y = 0;
                    for(let x in res.data.showapi_res_body.list){
                        
                        if(x>0 && res.data.showapi_res_body.list[x]!=res.data.showapi_res_body.list[x-1]){
                            //创建新的年份
                            y++
                            time.push({
                                node:res.data.showapi_res_body.list[x].year
                            },
                            {
                                content: [res.data.showapi_res_body.list[x].title],
                                bgColor:color[y%5]
                            }
                            )
                        }else if(x == 0){
                            y++
                            time.push({
                                node:res.data.showapi_res_body.list[x].year
                            },
                            {
                                content: [res.data.showapi_res_body.list[x].title],
                                bgColor:color[y%5]
                            }
                            )
                        }else{
                            time.push({
                                content:[res.data.showapi_res_body.list[x].title],
                                bgColor:color[y%5]
                            })
                        }
                    }
                    JSON.stringify(time)
                  }else{
                      Taro.showToast({
                          title:'某种未知错误无法获取数据',
                          icon:'none',
                          duration:2500
                      })
                  }
              }
          }).then(()=>{
              this.setState({
                  time:time,
                  load:true
              })
          })
      }
      
  config = {
    navigationBarTitleText: '历史上的今天'
  }

  render () {
    let temp = null
    if(this.state.load){
        temp = <View>
            <ClAnimation type="slide-left" duration={0.85} delay={0}>
            <ClTimeline times={this.state.time}></ClTimeline>
            </ClAnimation>
        </View>
    }
    return (
        <View className = "history">
          {temp}
        </View>
    )
  }
  
}
