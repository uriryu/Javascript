// ページのトップへ戻るボタンは、HTMLとCSSだけでも実現できます。
// ただし、一瞬で戻ってしまうため、jQueryを用いてスクロールしながらページ最上部に戻るように設定してみました。

/*global $*/
$(function(){
  $('#back a').on('click', function(event){
      // function(event)のeventはイベントオブジェクトというもので、
      // 今回はclickイベントが発生した際の様々な情報をeventという名前の引数に渡されます。

    $('body, html').animate({
      // animate() は、アニメーション効果を設定するjQueryの関数です。

      scrollTop:0
      // 「最上部に移動する」の意味
      // scroll Top 単語が変わるときは大文字にすること!

    }, 800);

    event.preventDefault();
    // aタグの機能を無効にするメソッドです。
    // aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化しています。

  });
});
