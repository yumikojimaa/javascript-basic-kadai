//DOMが完全に読み込まれた後に実行する
document.addEventListener('DOMContentLoaded' , function() {
// HTML要素を定数に代入
const textElement = document.getElementById('text');
const btnElement =document.getElementById('btn');

//ボタンがクリックされた時のイベントリスナーを設定
btnElement.addEventListener('click', function() {
  //2秒後にテキストを変更
  setTimeout(function() {
    textElement.textContent = 'ボタンをクリックしました' ;
  }, 2000);
 });
});
