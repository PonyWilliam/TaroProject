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
            add:true,
            finsh:false,
            download:false,
            downurl:''
        }
      }
  config = {
    navigationBarTitleText: '证件照生成',

  }
  user(){
      
  }
  back(){
    Taro.navigateBack()
  }
  watchad = (url)=>{
    let that = this
    let videoAd = Taro.createRewardedVideoAd({
      adUnitId: '8e5baedff36bc1d33aa201d133c2d261'
    })
    videoAd.onError(function(res){
      
    })
    videoAd.onLoad(function(res){
    })
    videoAd.onClose(function(res){
      console.log(res)
      if(res.isEnded){
        Taro.showLoading({
          title:'制作中'
        })
        Taro.getFileSystemManager().readFile({
          filePath:that.state.files[0].url,
          encoding:"base64",
          success:res=>{
            console.log(res)
            Taro.request({
              url:'https://zjz.market.alicloudapi.com/api/cut_check_pic',
              method:'POST',
              header:{
                "Authorization":"APPCODE 73fb5aa43a784e6e8b4aab05947ad6df",
                "Content-Type":"application/json; charset=UTF-8"
               },
               data:{
                spec_id:1,
                file:res.data
               },
               success:(res)=>{
                 console.log(res)
                 if(res.data.code == "507"){
                    that.setState({
                      files:[]
                    })
                    Taro.showModal({
                      title:"错误",
                      content:"您上传的图片不符合标准"
                    })
                 }else if(res.data.code=="200"){
                    console.log(res.data.result)
                    let url = res.data.result.file_name_wm[0]
                    url = url.replace(/https/g,'http')
                    console.log(url)
                    that.setState({
                      downurl:res.data.result.file_name_wm[0],
                      download:true//显示可下载
                    })

                 }else{
                  that.setState({
                    files:[]
                  })
                  Taro.showModal({
                    title:"错误",
                    content:"其它错误，请联系作者"
                  })
                 }
                 Taro.hideLoading()
               }
            })
          }
        })
        

        
      }else{
        that.setState({
          files:[],
          add:true
        })
      }
    })
    
    videoAd.load()
      .then(() => {
        console.log('激励视频加载成功');
        videoAd.show().then(() => {
          console.log('激励视频 广告显示成功')
        })
        .catch(err => {
          console.log('激励视频 广告显示失败')
          Taro.showToast({
            title:'广告显示失败'
          })
        })
      })
      .catch(err => {
        console.log('激励视频加载失败');
        Taro.showToast({
          title:'广告加载失败'
        })
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
          if(info.percent == 1){
            that.test(url)
            
          }
        }
    });
  }
  test = (url)=>{
    let temp = false
    let that = this
    Taro.hideLoading()
    Taro.showModal({
      title:'提示',
      content:'生成证件照需要观看15秒广告，是否观看',
      success:function(res){
        that.setState({
          finsh:false
        })
        if(res.confirm){
          temp = that.watchad(url)
        }else{
          that.setState({
            files:[],
            add:true
          })
        }
      }
    })
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
  download(){
    if(this.state.downurl==''||this.state.download==false){
      Taro.showModal({
        title:'错误',
        content:'无法获取下载链接，请联系开发者.'
        
      })
    }else{
      Taro.showLoading({
        title:'下载中'
      })
      Taro.downloadFile({
        url:this.state.downurl,
        success:(res)=>{
          console.log(res)
          Taro.hideLoading()
          if(res.tempFilePath){//临时存储目录
            Taro.saveImageToPhotosAlbum({
              filePath:res.tempFilePath,
              success:res=>{
                console.log(res)
                Taro.showToast({
                  title:"保存成功",
                  duration:2000
                })
              },
              fail:res=>{
                console.log(res)
                Taro.showToast({
                  title:'保存失败',
                  icon:"none"
                })
              }
            })
            
          }else{
            Taro.showToast({
              title:"无法保存"
            })
          }
        }
      })
    }
  }
  pay(){
    Taro.showToast({
      title:'暂未开放'
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
      let result = null
      if(this.state.add == false){
          button = <View className="submit"><AtButton type='primary' size="normal" circle onClick={this.submit.bind(this)}>提交</AtButton></View>
      }else{
          button = <View></View>
      }
      if(this.state.download == true){
        result = <View className="result">
          <View className="download">
            <View className="button">
              <AtButton type="secondary" circle onClick={this.download.bind(this)}>
                下载
              </AtButton>
            </View>
            <View className="button">
              <AtButton type="secondary" circle onClick={this.pay.bind(this)}>
                下载无水印
              </AtButton>
            </View>
          </View>
          <Text className="preview">结果预览</Text>
          <Image src={this.state.downurl}></Image>
          
        </View>
      }else{
        result = <View className="result">
            
        </View>
      }
    return (
        <View className = "photo">
            <AtNavBar
            onClickRgIconSt={this.user}
            onClickLeftIcon={this.back}
            color='#000'
            title='证件照制作'
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
            {result}

            <ad unit-id="e3408ab24974615e792103134bee9187"></ad>
        </View>
    )
  }
  
}
