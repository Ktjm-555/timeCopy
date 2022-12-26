let body = document.querySelector('body')
let addElement = document.createElement('h1');
addElement.textContent = 'HELLO WORLD';
// prepend() 前に置く（ここではbody）の一番最初の要素
body.prepend(addElement);

// 送ったメッセージを受け取る
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let title = document.querySelector('.css-skov52').textContent
  // メッセージを送信したところにレスを返せる。
  sendResponse(title);
});
