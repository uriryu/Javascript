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
let i;
let num = 0;
// ↓ i < 10だと 9までになってしまうので、11にすること!
for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
// iをconstで実行すると固まった。ReferenceErrorになる