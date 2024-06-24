function getCurrentDate() {
  let currentDate = new Date(); // 現在の日付を取得する
  let year = currentDate.getFullYear(); // 年を取得する
  let month = currentDate.getMonth() + 1; // 月を取得する (0から始まるため、+1する)
  let day = currentDate.getDate(); // 日を取得する

  // 年月日を文字列として連結して返す
  return year + '年' + month + '月' + day + '日';
}

// 関数を呼び出して結果を表示する例
console.log(getCurrentDate());
