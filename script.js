const progressBar = function (skillId, numOfCircle, num, timeForLoad) {
 let numElement = document.querySelector(`#${skillId} .inner`);
 let root = document.documentElement;
 let counter = 0;
 let intervalId;

 root.style.setProperty("--changeHTML", numOfCircle + 216);
 root.style.setProperty("--changeCSS", numOfCircle + 106);

 intervalId = setInterval(() => {
  if (counter == num) {
   clearInterval(intervalId);
  } else {
   counter = counter + 1;
   numElement.innerHTML = counter + "%";
   console.log(numElement);
  }
 }, timeForLoad);
};

progressBar("skill-1", 0, 50, 40);
progressBar("skill-2", 0, 75, 27);
