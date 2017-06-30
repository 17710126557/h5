
var screenAnimateElements={
  '.screen-1':[
    '.screen-1__heading',
    '.screen-1__phone',
    '.screen-1__shadow'
  ],
  '.screen-2':[
    '.screen-2__heading',
    '.screen-2__subHeading',
    '.screen-2__phone',
  ]
}

function setScreenAnimate(ele){
  var screen=document.querySelector(ele);
  var animateElements = screenAnimateElements[ele];
    var isSetScreenAnimate=false;
    var isScreentAnimateDone=false;
    screen.onclick=function(){
    // 初始状态
      if(!isSetScreenAnimate){
        for(var k in  animateElements){
          var elem = document.querySelector(animateElements[k]);
          var cls  = elem.getAttribute('class');
                     elem.setAttribute('class',cls+' '+animateElements[k].substr(1)+'_animate_init')
        }
        isSetScreenAnimate=true;
        return
      }
    // done状态
      if(!isScreentAnimateDone){
        for(var k in  animateElements){
          var elem = document.querySelector(animateElements[k]);
          var cls  = elem.getAttribute('class');
                     elem.setAttribute('class',cls.replace('_animate_init','_animate_done'))
        }
        isScreentAnimateDone=true;
        return;
      }
    // init状态
      if(isScreentAnimateDone){
        for(var k in  animateElements){
          var elem = document.querySelector(animateElements[k]);
          var cls  = elem.getAttribute('class');
                     elem.setAttribute('class',cls.replace('_animate_done','_animate_init'))
        }
        isScreentAnimateDone=false;
        return;
      }
  }
}

setScreenAnimate('.screen-2');
