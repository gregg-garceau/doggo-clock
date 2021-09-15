setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
  }
  if (hour == 0) {
      hr = 12;
      am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":"
          + min + ":" + sec + am_pm;

  document.getElementById("clock")
          .innerHTML = currentTime;

}


var doggoImg = document.getElementById('doggo');

function changeDoggo() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 18 || hour >= 0 && hour < 6) {
    var image = 'https://media2.giphy.com/media/DCy2dnXPeGsO4/giphy.gif'
  } else if (hour >= 6 && hour < 12) {
    var image = 'https://c.tenor.com/KAFAckh2tjwAAAAC/wake-up-arise.gif'
  } else if (hour >= 12 && hour < 18) {
    var image = 'https://media4.giphy.com/media/SX71qs3TDxVkvbLJ4o/giphy.gif'
  }
  doggoImg.src = image;
  showTime();
}
changeDoggo();
