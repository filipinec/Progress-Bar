let num1 = document.querySelector("#number-1");
let root = document.documentElement;
let counter = 0;

const x = function (numOfCircle, num, timeForLoad) {
 root.style.setProperty("--change", numOfCircle);
 setInterval(() => {
  if (counter == num) {
   clearInterval();
  } else {
   counter = counter + 1;
   num1.innerHTML = counter + "%";
  }
 }, timeForLoad);
};

x(218, 50, 30);
// x(109, 75, 30);
// x(0, 100, 30);
