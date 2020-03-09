import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtImagePicker,AtNavBar,AtNoticebar, AtButton  } from 'taro-ui'
import './photo.scss'
var COS = require('../../components/cos/cos')
var show = require('../../components/qqad/qqad')
export default class Mine extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            files:[],
            add:true
        }
      }
  config = {
    navigationBarTitleText: '证件照生成',

  }
  qqad(test){

  }
  user(){
      
  }
  back(){
    
  }
  watchad(){
    let videoAd = Taro.createRewardedVideoAd({
      adUnitId: '8e5baedff36bc1d33aa201d133c2d261'
    })
    videoAd.onError(function(res){
      console.log('videoAd onError',res)
      return false
    })
    videoAd.onLoad(function(res){
      console.log('videoAd onLoad',res)
    })
    videoAd.onClose(function(res){
      return res.isEnded;
    })
    
    videoAd.load()
      .then(() => {
        console.log('激励视频加载成功');
        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        })
        .catch(err => {
          console.log('激励视频 广告显示失败')
        })
      })
      .catch(err => {
        console.log('激励视频加载失败');
      })
  }
  submit(e){
    let that = this
    Taro.showLoading({
        title:'上传中'
    })
    
    console.log(this.state.files)
    //通过腾讯cos上传图片到腾讯云存储桶
    //通过随机数加时间戳存储
    let time = new Date().getTime()
    let rand = (Math.ceil(Math.random()*500000)+200000)
    let filename = time+ rand +'.jpg'
    var cos = new COS({
      SecretId: 'AKID3tTnfG5lJbdOtBnzVoreBSXOzKSKtJSO',
      SecretKey: 'qRozvc4HK8h182g6GJ8iSpxqTr42pMip',
   });
   cos.postObject({
    Bucket: 'qq-1257689370',
    Region: 'ap-guangzhou',
    Key: 'test/' + filename,
    FilePath: this.state.files[0].url,
    onProgress: function (info) {
      
      
        console.log(info)
          //上传完成，获取url
          let url = 'https://qq-1257689370.cos.ap-guangzhou.myqcloud.com/test/'+filename
               
        }
    }, function (err, data) {
        console.log('1234',err,data)
        Taro.request({
          url:this.state.files[0].url,
          success:res=>{
            console.log(res)
          }
        })
    });
  }
  test(){
    console.log(1)
  }
  onChange (files) {
    this.setState({
      files
    },()=>{
        if(files.length>=1){
            this.setState({
                add:false
            })
        }else{
            this.setState({
                add:true
            })
        }
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  render () {
      let button = null
      if(this.state.add == false){
          button = <AtButton type='primary' size="small" circle onClick={this.submit.bind(this)}>提交</AtButton>
      }else{
          button = <View></View>
      }
    return (
        <View className = "photo">
            <AtNavBar
            onClickRgIconSt={this.user}
            onClickLeftIcon={this.back}
            color='#000'
            title='NavBar 导航栏示例'
            leftText='返回'
            rightFirstIconType='user'
            />
            <AtNoticebar icon='volume-plus' marquee>
                证件照上传后可以得到一个返回的图片存储到手机。存储到手机需要观看一定时长的广告。
            </AtNoticebar>
            <AtImagePicker
            length={1}
            showAddBtn={this.state.add}
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            onFail={this.onFail.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
            />
            {button}
        </View>
    )
  }
  
}
