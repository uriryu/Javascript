// alert('おはよう！');
// HTMLにJavascriptを記入すると、HTMLのコードと混在してしまい記述量が増え読みにくくなる。
// 判別や修正が難しいため、専用ファイル(js)を用意し分けてあげる。

// let は変数。定義した後に変更も可能!
// let hello = "Hello World";
// hello = 1;
// alert(hello);

// 順番に表示された!OKを押した後、1のアラートも出た。
// let int1 = 1;
// alert(int1);

// alert('Hello' + 'World');

// let str1 = 'Hellow';
// let str2 = 'World!!!';
// alert(str1 + str2);

// if文
// let orange = 120;
// let apple = 120;
// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else {
//   alert('みかんの値段がりんごより高い');
// }

// while文
// 条件がtrueである間は繰り返し処理が実行される。※回数は決まっていない。
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です。');

// do...while文
// 条件式のtrue/falseに関わらず、最初の1回だけは必ず処理する。
// その後、条件式を評価して、繰り返すか抜けるかを決める。
// let num = 4;
// do {
//   alert(num);
//   num = num * 4;
//   if (num >= 64) {
//     break;
//   }
// } while(num < 100);

// alert('end');

// for文
// 決められた回数の処理を繰り返す。

// { 繰り返す回数 (初期値) を設定する、条件を満たす場合の処理を記述する }
// let i;
// let num = 0;
// // ↓ i < 10だと 9までになってしまうので、11にすること!
// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');
// iをconstで実行すると固まった。ReferenceErrorになる!

// *再宣言をできるのは、varのみ!
// var nickname = "taro";
// console.log(nickname);

// var nickname ="ichiro";
// console.log(nickname);

// letによる再宣言 :エラーを確認するため
// let nickname = "taro";
// console.log(nickname);

// let nickname = "ichiro";
// console.log(nickname);

// constによる再宣言
// const nickname = "taro";
// console.log(nickname);

// const nickname = "ichiro";
// console.log(nickname);

// 再宣言はvar, let, const それぞれを引数の前に書くこと。

// 再代入 最初に宣言した後、引数のみを書いて内容を変更すること。
// var nickname = "taro";
// console.log(nickname);
// nickname = "ichiro";
// console.log(nickname);
// セミコロンについては、書くなら書く。書かないなら書かない。どっちかにすること!

// let nickname = "taro";
// console.log(nickname);
// nickname = "ichiro";
// console.log(nickname);

// varで宣言した後、同じ引数をletで宣言はできないよ!

// const nickname = "taro";
// console.log(nickname);
// nickname = "ichiro";
// console.log(nickname);

// constは"定数"のため、値を変更することはできない。var, letは"変数"である!。

// スコープ(有効範囲)について
// グローバルスコープ
// ローカルスコープ => 関数スコープ ブロックスコープ の2つある。

// var str = "webcamp"; //グローバルスコープ

// function foo() {
//   console.log(str);
//   var y = "hello"; //関数スコープ
//   console.log(y);
// }

// foo();
// 参照エラー
// console.log(y); ここでは定義されていないことになる。

// letのスコープ(ブロックスコープ)

// function foo() {
//   let x = "webcamp";
//   {
//     let y = "hello webcamp";
//     console.log(y);
//   }
//   console.log(x);
//   // console.log(y) yはブロック内のみ有効!ここは範囲外になる。
// }

// foo();

// for文とletのスコープ(ブロックスコープ)を使ってみる!
// for (let i = 0; i < 10; i++) {
//  console.log(i);
//  console.log(i); ここが正しい位置。
// }

// console.log(i); ここに書くと参照エラー!

// ※constもletと同じくブロックスコープを使用する。

// var str = "webcamp";

// function foo () {
//   // console.log(str); ここは宣言されたのみの変数で代入されていないことになる。
//   // 厳密には、varによって宣言された変数に初期値を入れない場合、"undefined"が初期値として代入される。
//   var str = "dmm webcamp";
//   console.log(str);
// }

// foo();
// グローバルスコープのstrと関数スコープのstrが存在するが
// console.log(str);が関数内で使用されているため、関数スコープのstrが参照される。

// letやconstの場合も巻き上げは起こる。
// しかし、変数の初期化を行わず、宣言のみの場合、それを参照すると
// 「Uncaught ReferenceError: Cannot access '変数名' before initialization」という エラー になる。

// ・引数と戻り値

// let alertString = addString("Webcamp");
// alert(alertString);
  // 引数の名前は、わかりやすいものなら何でも可。伝わるものにすること!
// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// ・入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);

  // prompt()関数の戻り値として、入力したものが、promptStrへ代入される→alertで出力される。
  // prompt()関数は入力欄に加え、OKとキャンセル両方でる。


// prompt()関数でじゃんけんを作る!
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + "です。");
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  // キャンセルボタンの判定には、nullを用いる
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
// while文は条件が真である間は繰り返し処理が行われる。
  // 今回はグー・チョキ・パー・キャンセルでない場合、以下の処理を実行する。

let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

// グーチョキパーとキャンセルだった場合さらに、分岐でキャンセルじゃない場合とキャンセルの場合で分ける。
if (user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// \nは改行。
} else {
  alert("またチャレンジしてね");
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
    // 範囲を決めた乱数を作るときには、「Math.random()」に最大値を掛けることで実現します。
    // 「0 〜 2」の範囲を作りたい場合、最大値の2をそのまま掛けてしまうと「0 〜 1」の範囲になってしまう。
    // 最大値に1を足して「3」を掛けることで、「0 〜 2」の範囲を設定しているのです。
    // Math.random()だと、小数点が表示されてしまうので、floorで小数点以下を切り捨てる。切り上げだと0がなくなってしまう。
  let hand_name;
    // 数字に連携させた文字列(じゃんけんの手)を格納する箱を作る


  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
  // 出力したい文字列をhand_nameに入れる → hand_nameはjs_handへ代入される。
}

// じゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}