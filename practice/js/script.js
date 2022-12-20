function message() {
  document.getElementById("view_time").innerHTML = getNow();
  // HTML要素の中身を変更するときに使われるプロパティ。
  // 中身を自由に変更することで、動的なWebページを作成できる。
}

function getNow() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth()+1;
  // 0が1月になるので、12が11月となってしまう。そのため+1をする。
  // +1をしないと0月ができる。
  var day = now.getDate();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  // 出力用
  var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";

  return s;
}

