// customDialog/customDialog.js
Page({

  data: {
    datas:[]
  },

  onLoad: function (options) {
    let datas = [];
    for(let i =0;i<20;i++){
      datas.push({id:i,content:"内容"+i});
    }
    this.setData({datas});
  },

  returnMove(){
    return
  },

  onReady: function () {
    setTimeout(v=>{
      this.setData({isShowDialog:true});
    },2000)
  },

  onShow: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})