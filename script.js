const degree=6;
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {

    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * degree;
    const ss = date.getSeconds() * degree;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

})

const dateDayWeek = document.getElementById('date-day-week'),
      dateMonth = document.getElementById('date-month'),
      dateDay = document.getElementById('date-day'),
      dateYear = document.getElementById('date-year'),
      textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      textSec = document.getElementById('text-seconds')

const clockText = () => {
    let date = new Date()
    let dayWeek = date.getDay(),
    month = date.getMonth(),
    day = date.getDate(),
    year = date.getFullYear(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds(),
    ampm

    let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`
    dateMonth.innerHTML = `${months[month]}`
    dateDay.innerHTML = `${day}, `
    dateYear.innerHTML = year

    if(hh >= 12){
        // hh = hh - 12
        ampm = 'PM'
     } else{
        ampm = 'AM'
     }
  
     textAmPm.innerHTML = ampm
  
     if(hh == 0){hh = 12}
  
     if(hh < 10){hh = `0${hh}`}
  
     textHour.innerHTML = `${hh}:`
  
     if(mm < 10){mm = `0${mm}`}
  
     textMinutes.innerHTML = `${mm}:`

     if(ss<10){ss = `0${ss}`}

     textSec.innerHTML = ss 

  }
  setInterval(clockText, 1000)


