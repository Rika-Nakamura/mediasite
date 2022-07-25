
$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント

  $('.toggle_btn').on('click', function () {
    // #headerにopenクラスが存在する場合
    if ($('header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $('.header').removeClass('open');

      // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('.header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('.mask').on('click', function () {
    // openクラスを削除して、メニューを閉じる
    $('.header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('.header__nav a').on('click', function() {
    $('.header').removeClass('open');
  });



  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });


  /*=================================================
    PICK UP スライダー
    ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  $('.slick-area').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });


  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });

});