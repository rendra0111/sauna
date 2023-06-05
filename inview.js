!(function (a) {
  "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof exports
          ? (module.exports = a(require("jquery")))
          : a(jQuery);
})(function (a) {
  function i() {
      var b,
          c,
          d = { height: f.innerHeight, width: f.innerWidth };
      return (
          d.height ||
          ((b = e.compatMode),
              (b || !a.support.boxModel) &&
              ((c = "CSS1Compat" === b ? g : e.body),
                  (d = { height: c.clientHeight, width: c.clientWidth }))),
          d
      );
  }
  function j() {
      return {
          top: f.pageYOffset || g.scrollTop || e.body.scrollTop,
          left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft,
      };
  }
  function k() {
      if (b.length) {
          var e = 0,
              f = a.map(b, function (a) {
                  var b = a.data.selector,
                      c = a.$element;
                  return b ? c.find(b) : c;
              });
          for (c = c || i(), d = d || j(); e < b.length; e++)
              if (a.contains(g, f[e][0])) {
                  var h = a(f[e]),
                      k = { height: h[0].offsetHeight, width: h[0].offsetWidth },
                      l = h.offset(),
                      m = h.data("inview");
                  if (!d || !c) return;
                  l.top + k.height > d.top &&
                      l.top < d.top + c.height &&
                      l.left + k.width > d.left &&
                      l.left < d.left + c.width
                      ? m || h.data("inview", !0).trigger("inview", [!0])
                      : m && h.data("inview", !1).trigger("inview", [!1]);
              }
      }
  }
  var c,
      d,
      h,
      b = [],
      e = document,
      f = window,
      g = e.documentElement;
  (a.event.special.inview = {
      add: function (c) {
          b.push({ data: c, $element: a(this), element: this }),
              !h && b.length && (h = setInterval(k, 250));
      },
      remove: function (a) {
          for (var c = 0; c < b.length; c++) {
              var d = b[c];
              if (d.element === this && d.data.guid === a.guid) {
                  b.splice(c, 1);
                  break;
              }
          }
          b.length || (clearInterval(h), (h = null));
      },
  }),
      a(f).on("scroll resize scrollstop", function () {
          c = d = null;
      }),
      !g.addEventListener &&
      g.attachEvent &&
      g.attachEvent("onfocusin", function () {
          d = null;
      });
});


var bar = new ProgressBar.Line(splash_text, {//id名を指定
  strokeWidth: 0,//進捗ゲージの太さ
  duration: 1000,//時間指定(1000＝1秒)
  trailWidth: 0,//線の太さ
  text: {//テキストの形状を直接指定 
    style: {//天地中央に配置
      position:'absolute',
      left:'50%',
      top:'50%',
      padding:'0',
      margin:'0',
      transform:'translate(-50%,-50%)',
      'font-size':'1.2rem',
      color:'#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  




