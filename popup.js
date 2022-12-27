let todayDateTime = ''

const getDateTime = () => {

  let now   =  new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });

  let date  = new Date(now).getDate();
  let month  = new Date(now).getMonth() + 1;

  let hour  = new Date(now).getHours();
  let min  = new Date(now).getMinutes();

  if (min < 10) {
    
    min = '0' + min

  }
    
  todayDateTime = month + "/" + date + " " + hour + ":" + min;

  console.log('now:' + min)
 
  return todayDateTime   

}
const start = document.querySelector('.start');
const end = document.querySelector('.end');


start.textContent = getDateTime() + ' 勤務開始';
end.textContent = getDateTime() + ' 勤務終了';

const yellowBtn = document.querySelector('.btn--yellow');
const redBtn = document.querySelector('.btn--red');
const blueBtn = document.querySelector('.btn--blue');

const report = 
"＜今日やろうとしていたこと＞\n●AP計画タスク\n\n●計画外作業\n\n＜今日実際にやったこと(やれたこと)＞\n●AP計画タスク\n\n●計画外作業\n\n＜天気（こころとからだの余裕）＞\nはれ\n\n＜その他(気づき等)＞\nなし"

yellowBtn.addEventListener('click', () => { 
  navigator.clipboard.writeText(report); 

  yellowBtn.innerHTML = 'OK!'; 
  setTimeout(() => (yellowBtn.innerHTML = 'Copy'), 1000);
});

redBtn.addEventListener('click', () => { 
  navigator.clipboard.writeText(start.textContent); 

  redBtn.innerHTML = 'OK!'; 
  setTimeout(() => (redBtn.innerHTML = 'Copy'), 1000);
});

blueBtn.addEventListener('click', () => { 
  navigator.clipboard.writeText(end.textContent); 

  blueBtn.innerHTML = 'OK!'; 
  setTimeout(() => (blueBtn.innerHTML = 'Copy'), 1000);
});

