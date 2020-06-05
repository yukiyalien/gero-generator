const gero = `エ🤮ン🤮ト🤮マ🤮おぇ〜っおぇっおぇオェオェオェオェオェOeOeOeOeおぇっエントマッオェュオェオェﾝ🤮オェッ🤮オェッオェッオェ🤮オェオェﾝ🤮
#嘔吐マ
https://gero.yukiya.me/`;
const encodedGero = encodeURIComponent(gero);

const openShare = () => {
  const domain = document.getElementById('server-domain').value;
  const link = `https://${domain}/share?text=${encodedGero}`;

  window.open(link, '', 'width=500,height=400');
};

// ページ読み込み完了時にロード
window.onload = () => {
  // gero-link classのついたリンクに対して文字列を挿入
  Array.from(document.getElementsByClassName('gero-link')).forEach(element => {
    element.href = element.href.replace('{gero}', encodedGero);
  });
};
window.openShare = openShare;
