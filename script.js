// declare variable dom
let clockDOM = document.querySelector("#clock");
let bodyDOM = document.querySelector("body");
let timeBtnDOM = document.querySelector("#time-btn");
let colorBtnDOM = document.querySelector("#color-btn");

// display = 1 => time
// display = 0 => hex
let display = 1;

// Create a media condition that targets viewports at least 600px wide
const mobileMediaQuery = window.matchMedia("(max-width: 600px)");

// Update clock every 1000ms
setInterval(() => {
  // Run live clock
  clock(display);
  // Convert time  to hex
  time = clock(display);
  hex = timeToHex(time);
  //  Change background color and font-color
  updateTextColor();
}, 1000);

// set display variable when button color/time clicked
timeBtnDOM.addEventListener("click", () => {
  display = 1; // Convert time  to hex
  // Run live clock
  clock(display);
  // Convert time  to hex
  time = clock(display);
  hex = timeToHex(time);
  //  Change background color and font-color
  updateTextColor();
});
colorBtnDOM.addEventListener("click", () => {
  display = 0; // Convert time  to hex
  // Run live clock
  clock(display);
  // Convert time  to hex
  time = clock(display);
  hex = timeToHex(time);
  //  Change background color and font-color
  updateTextColor();
});

// Declare function

// 1.
// Making live clock
function clock() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clockText =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);

  return clockText;
}

// 2.
// Convert int to hex
function IntToHex(int) {
  // Parse string as Base16 (hex)
  var hex = parseInt(int, 10).toString(16);

  // If it's less than six, trim it to three
  if (hex.length < 6) {
    hex = hex.substring(0, 3);
  }

  // Limit it to six chars for CSS styles
  return hex.substring(0, 6);
}

// 3.
// Calculate seconds for current time
function timeToHex(time) {
  let array = time.split(":");
  let hex =
    array[0].toString(16) + array[1].toString(16) + array[2].toString(16);

  return hex;
}

// 4.
// Update text and color
function updateTextColor() {
  if (display) {
    clockDOM.innerText = time;
    clockDOM.style.fontSize = "10rem";
    clockDOM.style.fontSize = "21vw";
    clockDOM.style.transform = " all 0.5s ease-in-out";

    bodyDOM.style.backgroundColor = "#" + hex;
    timeBtnDOM.style.backgroundColor = "white";
    timeBtnDOM.style.color = "#" + hex;
    timeBtnDOM.style.border = "none";

    colorBtnDOM.style.backgroundColor = "transparent";
    colorBtnDOM.style.color = "white";
    colorBtnDOM.style.border = "solid 1px white";
  } else {
    clockDOM.innerText = "#" + hex;
    clockDOM.style.fontSize = "10rem";
    clockDOM.style.fontSize = "19vw";

    timeBtnDOM.style.backgroundColor = "transparent";
    timeBtnDOM.style.color = "white";
    timeBtnDOM.style.border = "solid 1px white";

    colorBtnDOM.style.backgroundColor = "white";
    colorBtnDOM.style.border = "none";
    colorBtnDOM.style.color = "#" + hex;
  }

  clockDOM.style.transition = "all .5s ease-in-out";
  clockDOM.style.transformOrigin = "right bottom ";
  clockDOM.style.transform = "scaleY(1)";
}
