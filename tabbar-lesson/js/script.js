/*global $*/
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。
$('#tab-contents .tab[id != "tab1"]').hide();
  // 特定の属性を持つ要素のみ取得したいとき $('要素[属性]')と記述する。
  // 特定の値に等しい要素だけを取得したいとき $('要素[属性 = "値"]')
  // 特定の値に等しくない要素を取得したいとき $('要素[属性 != "値"]')

// id="tab-menu"のaタグがクリックされたときに、処理を実行してください
$('#tab-menu a').on('click', function(event) {

  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示にしています。
  $("#tab-contents .tab").hide();

  // activeが削除対象のクラスとして指定
  $("#tab-menu .active").removeClass("active");


  $(this).addClass("active");

  // .attr()は、HTML要素の属性を取得したり設定できるメソッド.
  // ここでは、href属性を取得するように指定しています。
  $($(this).attr("href")).show();

  //.show()は要素を表示するメソッドなので、取得したhref属性の中身が表示されることになります。
    //.attr(属性)は属性が要素に付与されているかどうか。付与されていないときはundefinedとなる。

    //.prop(属性)は属性を取得したり設定できる。
    // 例) <p id="text"></p> var id = $('p').prop('id'); の結果は text となる。
    // pタグのidの属性値を取得できる。

    // さらにチェックボックスにチェックがあるかどうかをtrue / falseで返せる。
      // attr()は、checkedの記述があるかどうかを確認する
      // prop()は、checkedの状態（チェックされたかどうか）を確認する。"チェックがないfalse チェックがあるtrueという感じ"。
  event.preventDefault();
});