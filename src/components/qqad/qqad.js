
var show = {
    name: 'app',
    version: '1.0.0',
    createAD: function(name){
        let videoAd = qq.createRewardedVideoAd({
            adUnitId: '8e5baedff36bc1d33aa201d133c2d261'
          })
          videoAd.onError(function(res){
            console.log('videoAd onError',res)
          })
          videoAd.onLoad(function(res){
            console.log('videoAd onLoad',res)
          })
          videoAd.onClose(function(res){
            console.log('videoAd onClose',res)
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
        console.log(this.name);
    }
}
module.exports = show