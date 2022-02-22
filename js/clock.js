const clock = document.querySelector('#clock');
const day = document.querySelector('#day');

function getClock() {
  const date = new Date();
  //new? it create a 'new'object
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const monthes = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  day.innerText = `${years}년${month + 1}월${days}일 ${monthes[date.getDay()-1]}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //즉시 호출
// setTimeout(sayHello,5000);
setInterval(getClock, 100); //매 초마다 getClock를 다시 실행하고 있다.
