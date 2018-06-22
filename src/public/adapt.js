
  export default function(win){
    var _window = /Window|global/i.test({}.toString.call(win).slice(8, -1)) ? win : window;
    var _document = _window.document;
    var _body = _document.body;
    var _metas;
    var _hasViewPort;
    var _minWidth;
    var useMinwidth;
    var flex = {
      resize:function(){
        var stopscroll=function () {
          _body.addEventListener('touchmove', function(evt) {
            evt.preventDefault();
          },{passive: false});
        }
        var hiddenBar=function () {
          _body.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            WeixinJSBridge.call('hideToolbar');
            WeixinJSBridge.call('hideOptionMenu');
          })
        }
        if(_body){
          //body加载立即执行重置
         stopscroll()
        }else{
          //body未加载待DOM加载完成后设置
          _document.addEventListener('DOMContentLoaded', function(){
            _body = _document.body;
            stopscroll()
          });
        }
      }
    };
    return flex;
  }
