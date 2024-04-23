//btnがクリックされてから2秒後にtextの文章を書き換える
//HTML要素を取得する
const text = document.getElementById('text');
const btn = document.getElementById('btn');

//btnがクリックされたら
btn.addEventListener('click', () => {
  //2秒待ってtextの文章を書き換える
  setTimeout(() => {
    text.innerHTML = 'ボタンをクリックしました'
  }, 2000);
})