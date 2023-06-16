const time = new Date();

time.toLocaleString('ru-RU'); //всё инфо по текущему времени и дате
time.toLocaleDateString('ru-Ru'); //инфо по текущей дате
time.toLocaleTimeString('ru-Ru'); //инфо по текущему времени


// Опции:
let options = {
  era: 'long', //short
  year: 'numeric', //2-digit
  month: 'long', //numeric, 2-digit, narrow, short
  day: 'numeric', //2-digit
  weekday: 'long', //short, narrow
  timezone: 'UTC',
  hour: 'numeric', //2-digit
  minute: 'numeric', //2-digit
  second: 'numeric', //2-digit
  timeZoneName: 'short', // long 
  hour12: true, // false
};

time.toLocaleString('ru-RU', options) // - пример

// получение компонентов времени:
time.getTime()
time.getFullYear()
time.getDay()
time.getDate()
time.getMonth()
time.getHours()
time.getMinutes()
time.getSeconds()
time.getMilliseconds()
time.getTimezoneOffset()
