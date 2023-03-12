// index.js

Page({
  onReady:function(){
    this.animation = wx.createAnimation({
      duration:100,
      timingFunction:"ease"
    })
  },
  data: {
    y:0
  },
  play_animation:function(){
    this.animation.rotate(10).step().rotate(-10).step().rotate(10).step().rotate(-10).step().rotate(10).step().rotate(-10).step().rotate(0).step()
    this.setData({animation: this.animation.export()})
  },
  shake:function(){
    this.play_animation();
    this.setData({
      y:500
    })
  },

})
