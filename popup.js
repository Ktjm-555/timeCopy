let todayDateTime = ''

const getDateTime = () => {

  let now   =  new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });

  let date  = new Date(now).getDate();
  let month  = new Date(now).getMonth() + 1;

  let hour  = new Date(now).getHours();
  let min  = new Date(now).getMinutes();

    
  todayDateTime = month + "/" + date + " " + hour + ":" + min;

  console.log('now:' + todayDateTime)
 
  return todayDateTime   

}

document.querySelector('.start').textContent = getDateTime() + ' 勤務開始';

document.querySelector('.end').textContent = getDateTime() + ' 勤務終了';

