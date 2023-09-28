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
// const start = document.querySelector('.start');
const end = document.querySelector('.end');


// start.textContent = getDateTime() + ' 勤務開始';
// end.textContent = getDateTime() + ' 勤務終了';
end.textContent = getDateTime();

// const yellowBtn = document.querySelector('.btn--yellow');
// const redBtn = document.querySelector('.btn--red');
const blueBtn = document.querySelector('.btn--blue');
let value1 = ""
let value2 = ""

const report = 
"＜今日やろうとしていたこと＞\n●AP計画タスク\n\n●計画外作業\n\n＜今日実際にやったこと(やれたこと)＞\n●AP計画タスク\n\n●計画外作業\n\n＜天気（こころとからだの余裕）＞\nはれ\n\n＜その他(気づき等)＞\nなし"

yellowBtn.addEventListener('click', () => { 
  // value1 = document.querySelector('.form-control1').value;
  // value2 = document.querySelector('.form-control2').value;
  
  // const arrayValue1 = value1.split('\n');
  // const arrayValue2 = value2.split('\n');

  // let newArray1 = [];
  // for (let i = 0; i < arrayValue1.length; i++) {
  //   newArray1.push(arrayValue1[i] + ":　h\n");
  // }
  // let newArray2 = [];
  // for (let i = 0; i < arrayValue2.length; i++) {
  //   newArray2.push(arrayValue2[i] + ":　h\n");
  // }
  // const newValue1 = newArray1.join("");
  // const newValue2 = newArray2.join("");

  // const reporttt = `＜今日やろうとしていたこと＞\n●AP計画タスク\n${value1}\n\n●計画外作業\n${value2}\n\n＜今日実際にやったこと(やれたこと)＞\n●AP計画タスク\n${newValue1}\n●計画外作業\n${newValue2}\n＜天気（こころとからだの余裕）＞\nはれ\n\n＜その他(気づき等)＞\nなし`

  // navigator.clipboard.writeText(reporttt); 
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

