//今日の日付を取得する
const today = new Date();

//取得した日付todayから年月日をそれぞれ呼び出す
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

//今日の日付を年月日で出力する
console.log(year + '年' + month + '月' + date + '日');