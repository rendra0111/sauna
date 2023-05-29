$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");

  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });

  $(".slide-left").on(
    "inview",
    function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // 要素が表示されたらslide-leftクラスを追加
        $(this).addClass("inview-slide-left");
      } else {
        $(this).removeClass("inview-slide-left");
      }
    }
  );

  // // スクロール時のイベント
  // $(window).scroll(function () {
  //   // fadeinクラスに対して順に処理を行う
  //   $(".slide-left").each(function () {
  //     // スクロールした距離
  //     let scroll = $(window).scrollTop();
  //     // fadeinクラスの要素までの距離
  //     let target = $(this).offset().top;
  //     // 画面の高さ
  //     let windowHeight = $(window).height();
  //     // fadeinクラスの要素が画面下にきてから200px通過した
  //     // したタイミングで要素を表示
  //     if (scroll > target - windowHeight + 50) {
  //       $(this).addClass("inview-slide-left");
  //     } else {
  //       $(this).removeClass("inview-slide-left");

  //     }
  //   });
  // });




  /*=================================================
スムーススクロール
===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // リンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });

  // アコーディオンメニューのラベルがクリックされた場合
  $("#ac-menu .label").on("click", function () {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
  });


  let yoyaku = $(".yoyaku");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  yoyaku.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      yoyaku.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      yoyaku.fadeOut();
    }
  });




  /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
  pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

  $(window).scroll(function() {
    // フェードアニメーションを呼び出す
    fadeAnime();
  });
  
  // フェードアニメーションの設定
  function fadeAnime() {
    // .fadeUpTriggerが付いた要素に対して
    $('.fade').each(function() {
      // 縦位置を取得し-50pxして、変数targetに代入する
      let target = $(this).offset().top -= 50;
      // スクロール量を取得し、変数scrollに代入する
      let scroll = $(window).scrollTop();
      // 表示画面の高さを取得し、変数windowHeightに代入する
      let windowHeight = $(window).height();

      // 要素の縦位置から表示画面の高さ+200pxを引いた数字よりscrollのほうが大きい場合
      if(scroll > target - windowHeight + 200) {
        // .fadeUpを追加する
        $(this).addClass('fade-in');
      } else {
        // そうでない場合は.fadeUpを削除する
        $(this).removeClass('fade-in');
      }
    });
  };  
  

  function EachTextAnimeControl() {
    $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("appeartext");

      } else {
        $(this).removeClass("appeartext");
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    //spanタグを追加する
    var element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }

        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });

    EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


});