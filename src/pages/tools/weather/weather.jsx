import Taro, { Component } from '@tarojs/taro'
import { View ,Image} from '@tarojs/components'
import {AtCard,AtSearchBar,AtAccordion,AtList, AtListItem,AtButton } from 'taro-ui'
import './weather.scss'
import { ClAnimation } from 'mp-colorui'
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            area:'',
            city:'',
            day7:[
                {'day_weather_pic':null,day_air_temperature:null,night_air_temperature:null}
            ],
            temp:''
        }
      }
      componentDidMount(){
        Taro.getLocation({
            type:'wgs84',
            success:(res)=>{
                const lat = res.latitude
                const lng = res.longitude
                console.log(lat,lng)
                Taro.request({
                    url:'https://iweather.market.alicloudapi.com/gps',
                    method:'GET',
                    header:{
                        "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
                        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    data:{
                        from:'autonavi',
                        lat:lat,
                        lng:lng,
                        needday:7
                    },success:(res)=>{
                        console.log(res)
                        this.setState({
                            area:res.data.data.cityinfo.area,
                            city:res.data.data.cityinfo.city,
                            day7:res.data.data.day7
                        })
                        Taro.request({
                            url:'https://iweather.market.alicloudapi.com/gps',
                            method:'GET',
                            header:{
                                "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
                                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
                            },
                            data:{
                                from:'autonavi',
                                lat:lat,
                                lng:lng,
                                needday:1
                            },success:(res)=>{
                                //请求实时天气
                                this.setState({
                                    area:res.data.data.now.area_name,
                                    temp:res.data.data.now.detail.temperature
                                })
                                console.log(res)
                            }
                        })
                        
                    }
                })
            },fail:(err)=>{
                console.log(err)
                Taro.showModal({
                    title:'提示',
                    content:'使用天气功能需要你授权位置信息后才能使用'
                })
            }
        })
      }
  config = {
    navigationBarTitleText: '天气预报'
  }

  render () {
      //做全屏扩展{
      if(this.state.day7.length>0){
        const numbers = [...Array(5).keys()]
        const weather = numbers.map((num)=>{
          return      <View className="block">
                      <View className="time">
                          {
                              num==0?"今天":num==1?"明天":"周"+this.state.day7[num].week
                          }
                      </View>
                          <Image className="weather_icon" src={"https://qq-1257689370.cos.ap-guangzhou.myqcloud.com"+this.state.day7[num].day_weather_pic}></Image>
                        <View className="tem">{String(this.state.day7[num].night_air_temperature)+"-"+String(this.state.day7[num].day_air_temperature)+"°C"}</View>
                  </View>
        })
      }else{
          weather = ()=>''
      }
    return (
        <View className = "weather">
            <ClAnimation type="scale-up" duration={0.6}>
            <View className="location">{area}</View>
            <View className="temp">{temp}°C</View>
            </ClAnimation>
            
            <View className="recent">
            <ClAnimation type="scale-down" duration={0.4} delay={0.5}>
            
                {weather}
                </ClAnimation>
            </View>
           
        </View>
    )
  }
  
}
