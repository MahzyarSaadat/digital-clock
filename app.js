const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const amPm = document.getElementById("am-pm");

setInterval(() => {
  const date = new Date();
  let second = date.getSeconds();
  let minute = date.getMinutes();
  let hour = date.getHours();

  if (second < 10) {
    second = "0" + second;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  if (hour > 24 && hour < 12) {
    amPm.textContent = "AM";
  } else {
    amPm.textContent = "PM";
  }
  seconds.textContent = second;
  hours.textContent = hour;
  minutes.textContent = minute;
}, 1000);
