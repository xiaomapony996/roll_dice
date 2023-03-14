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
    position_x1:220,
    position_y1:180,
    position_x2:220,
    position_y2:130,
    position_x3:220,
    position_y3:80,
    position_x4:220,
    position_y4:30,
    position_x5:220,
    position_y5:-20,
    position:'absolute',
    dice_x1:1,
    dice_y1:1,
    dice_x2:1,
    dice_y2:1,
    dice_x3:1,
    dice_y3:1,
    dice_x4:1,
    dice_y4:1,
    dice_x5:1,
    dice_y5:1,


  },
  play_bgm:function(){
    var bgm = wx.createInnerAudioContext();
    bgm.autoplay = true;
    bgm.src = "../video/dice_bgm.mp3";
    bgm.onPlay(function(){
      console.log('正常播放');
    });
    bgm.onError(function(res){
      console.log(res.errMsg);
      console.log(res.errCode);
    });
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
    this.play_animation(),this.play_bgm();
    if(Math.random()*10000<100){
        //执行叠骰一条龙
        this.setData({
          y:150,
          position_x1:220,
          position_y1:180,
          position_x2:220,
          position_y2:130,
          position_x3:220,
          position_y3:80,
          position_x4:220,
          position_y4:30,
          position_x5:220,
          position_y5:-20,
          position:'absolute',
          dice_x1:1,
          dice_y1:1,
          dice_x2:1,
          dice_y2:1,
          dice_x3:1,
          dice_y3:1,
          dice_x4:1,
          dice_y4:1,
          dice_x5:1,
          dice_y5:1,
        })
    }
    else{
        //执行正常逻辑
        this.setData({
            y:150,
            position_x1:80+Math.random()*20,
            position_y1:60+Math.random()*20,
            position_x2:180+Math.random()*20,
            position_y2:70+Math.random()*20,
            position_x3:280+Math.random()*20,
            position_y3:80+Math.random()*20,
            position_x4:180+Math.random()*20,
            position_y4:150+Math.random()*20,
            position_x5:300+Math.random()*20,
            position_y5:160+Math.random()*20,
            position:'absolute',
            dice_x1:Math.floor(Math.random()*6)+1,
            dice_y1:Math.floor(Math.random()*8)+1,
            dice_x2:Math.floor(Math.random()*6)+1,
            dice_y2:Math.floor(Math.random()*8)+1,
            dice_x3:Math.floor(Math.random()*6)+1,
            dice_y3:Math.floor(Math.random()*8)+1,
            dice_x4:Math.floor(Math.random()*6)+1,
            dice_y4:Math.floor(Math.random()*8)+1,
            dice_x5:Math.floor(Math.random()*6)+1,
            dice_y5:Math.floor(Math.random()*8)+1,
          })
    }

  },
})
