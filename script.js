let num1 = document.querySelector("#number-1");
let root = document.documentElement;
let counter = 0;
let intervalId;

const x = function (numOfCircle, num, timeForLoad) {
 root.style.setProperty("--change", numOfCircle);
 setInterval(() => {
  if (counter == num) {
   clearInterval(intervalId);
  } else {
   counter = counter + 1;
   num1.innerHTML = counter + "%";
  }
 }, timeForLoad);
};

x(218, 50, 40);
// x(109, 75, 27);
// x(0, 100, 30);
