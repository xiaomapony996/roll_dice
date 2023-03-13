// index.js

Page({
  onReady:function(){
    this.animation = wx.createAnimation({
      duration:100,
      timingFunction:"ease"
    })
  },
  data: {
    y:0,
    position_x1:200,
    position_y1:0,
    position_x2:200,
    position_y2:100,
    position_x3:200,
    position_y3:200,
    position_x4:200,
    position_y4:300,
    position_x5:200,
    position_y5:400,
    position:'absolute'


  },
  play_animation:function(){
    this.animation.rotate(10).step()
    .rotate(-10).step()
    .rotate(10).step()
    .rotate(-10).step()
    .rotate(10).step().
    rotate(-10).step()
    .rotate(0).step()
    this.setData({animation: this.animation.export()})
  },
  shake:function(){
    this.play_animation();
    if(Math.random()*10000<100){
        //执行叠骰一条龙
        this.setData({
            y:500,
            position_x1:200,
            position_y1:0,
            position_x2:200,
            position_y2:100,
            position_x3:200,
            position_y3:200,
            position_x4:200,
            position_y4:300,
            position_x5:200,
            position_y5:400,
            position:'absolute'
        })
    }
    else{
        //执行正常逻辑
        this.setData({
            y:500,
            position_x1:Math.random()*50,
            position_y1:Math.random()*100,
            position_x2:Math.random()*50,
            position_y2:Math.random()*100,
            position_x3:Math.random()*50,
            position_y3:Math.random()*100,
            position_x4:Math.random()*50,
            position_y4:Math.random()*100,
            position_x5:Math.random()*50,
            position_y5:Math.random()*100,
            position:'relative'
          })
    }

  },

})
