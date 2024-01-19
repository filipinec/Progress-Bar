let num = document.querySelector("#number");
let counter = 0;
// setInterval(() => {
//  if (counter == 65) {
//   clearInterval();
//  } else {
//   counter = counter + 1;
//   num.innerHTML = counter + "%";
//  }
// }, 30);

const x = function (setNum) {
 setInterval(() => {
  if (counter == setNum) {
   clearInterval();
  } else {
   counter = counter + 1;
   num.innerHTML = counter + "%";
   
  }
 }, 30);
};
x(65);
