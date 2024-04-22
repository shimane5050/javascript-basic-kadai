//HTML要素を取得する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//btnがクリックされたらtextの文章を変える
btn.addEventListener('click', () => {
  text.innerHTML = 'ボタンをクリックしました';
})