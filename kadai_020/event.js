// HTML要素を取得
const textElement = document.getElementById('text');
const button =document.getElementById('btn');

//ボタンにイベントリスナーを追加
button.addEventListener('click',() => {
//テキストを変更
textElement.innerText = 'ボタンをクリックしました';
});
