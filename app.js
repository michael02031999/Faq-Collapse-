//This belongs to the first container
let firstFaqContainer = document.getElementById("firstFaqContainer");
let firstfaqQuestion = document.getElementById("firstfaqQuestion");
let firstfaqAnswer = document.getElementById("firstfaqAnswer");
let image = document.getElementById("image");
let x = document.getElementById("x");
let xWithin = document.getElementById("x-within");
let angle = document.getElementById("angle");

//This belongs to the first container addeventlistener

angle.addEventListener("click", expand1);
x.addEventListener("click", shrink1);

//This belongs to the second container

let firstFaqContainer2 = document.getElementById("firstFaqContainer2");
let firstfaqQuestion2 = document.getElementById("firstfaqQuestion2");
let angle2 = document.getElementById("angle2");
let x2 = document.getElementById("x2");
let xwithin2 = document.getElementById("x-within2");
let firstfaqAnswer2 = document.getElementById("firstfaqAnswer2");
let image2 = document.getElementById("image2");

//console.log(firstfaqQuestion2.parentElement);
//This belongs to the second container addeventlistener

angle2.addEventListener("click", expand2);
x2.addEventListener("click", shrink2);

//This belongs to the third container

let firstFaqContainer3 = document.getElementById("firstFaqContainer3");
let firstfaqQuestion3 = document.getElementById("firstfaqQuestion3");
let angle3 = document.getElementById("angle3");
let x3 = document.getElementById("x3");
let firstfaqAnswer3 = document.getElementById("firstfaqAnswer3");
let image3 = document.getElementById("image3");

//This belongs to the third container addeventlistener

angle3.addEventListener("click", expand3);
x3.addEventListener("click", shrink3);

//This belongs to the fourth container

let firstFaqContainer4 = document.getElementById("firstFaqContainer4");
let firstfaqQuestion4 = document.getElementById("firstfaqQuestion4");
let angle4 = document.getElementById("angle4");
let x4 = document.getElementById("x4");
let firstfaqAnswer4 = document.getElementById("firstfaqAnswer4");
let image4 = document.getElementById("image4");

//This belongs to the fourth container addeventlistener

angle4.addEventListener("click", expand4);
x4.addEventListener("click", shrink4);

//Fifth container
let firstFaqContainer5 = document.getElementById("firstFaqContainer5");
let firstfaqQuestion5 = document.getElementById("firstfaqQuestion5");
let angle5 = document.getElementById("angle5");
let x5 = document.getElementById("x5");
let firstfaqAnswer5 = document.getElementById("firstfaqAnswer5");
let image5 = document.getElementById("image5");
//Fifth container addeventlistener
angle5.addEventListener("click", expand5);
x5.addEventListener("click", shrink5);

function expand5() {
  image5.style.display = "unset";
  angle5.style.display = "none";
  x5.style.display = "unset";

  firstfaqAnswer5.style.display = "unset";
  firstFaqContainer5.style.boxShadow = "0px 2.5px 10px rgb(159, 164, 168)";
  firstFaqContainer5.style.background = "rgb(255,255,255)";
}

function shrink5() {
  angle5.style.display = "unset";
  x5.style.display = "none";

  image5.style.display = "none";

  firstfaqAnswer5.style.display = "none";
  firstFaqContainer5.style.boxShadow = "";
  firstFaqContainer5.style.background = "rgb(240, 240, 240)";
}

function expand4() {
  image4.style.display = "unset";
  angle4.style.display = "none";
  x4.style.display = "unset";

  firstfaqAnswer4.style.display = "unset";
  firstFaqContainer4.style.boxShadow = "0px 2.5px 10px rgb(159, 164, 168)";
  firstFaqContainer4.style.background = "rgb(255,255,255)";
}

function shrink4() {
  angle4.style.display = "unset";
  x4.style.display = "none";

  image4.style.display = "none";

  firstfaqAnswer4.style.display = "none";
  firstFaqContainer4.style.boxShadow = "";
  firstFaqContainer4.style.background = "rgb(240, 240, 240)";
}

function expand3() {
  image3.style.display = "unset";
  angle3.style.display = "none";
  x3.style.display = "unset";

  firstfaqAnswer3.style.display = "unset";
  firstFaqContainer3.style.boxShadow = "0px 2.5px 10px rgb(159, 164, 168)";
  firstFaqContainer3.style.background = "rgb(255,255,255)";
}

function shrink3() {
  angle3.style.display = "unset";
  x3.style.display = "none";

  image3.style.display = "none";

  firstfaqAnswer3.style.display = "none";
  firstFaqContainer3.style.boxShadow = "";
  firstFaqContainer3.style.background = "rgb(240, 240, 240)";
}

function expand2() {
  image2.style.display = "unset";
  angle2.style.display = "none";
  x2.style.display = "unset";
  xwithin2.style.display = "unset";

  firstfaqAnswer2.style.display = "unset";
  firstFaqContainer2.style.boxShadow = "0px 2.5px 10px rgb(159, 164, 168)";
  firstFaqContainer2.style.background = "rgb(255,255,255)";
}

function shrink2() {
  angle2.style.display = "unset";
  x2.style.display = "none";

  image2.style.display = "none";

  firstfaqAnswer2.style.display = "none";
  firstFaqContainer2.style.boxShadow = "";
  firstFaqContainer2.style.background = "rgb(240, 240, 240)";
}

function expand1() {
  //This is the first container
  image.style.display = "unset";
  angle.style.display = "none";
  x.style.display = "unset";

  firstfaqAnswer.style.display = "unset";
  firstFaqContainer.style.boxShadow = "0px 2.5px 10px rgb(159, 164, 168)";
  firstFaqContainer.style.background = "rgb(255,255,255)";
}

function shrink1() {
  x.style.display = "none";

  angle.style.display = "unset";

  firstfaqAnswer.style.display = "none";
  image.style.display = "none";

  firstFaqContainer.style.boxShadow = "";
  firstFaqContainer.style.background = "rgb(240, 240, 240)";
}
