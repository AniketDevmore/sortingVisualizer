const newArray = document.getElementById("new-array");
const bars = document.getElementById("bars");
const bubbleSort = document.getElementById("bubble");
const insertionSort = document.getElementById("insertion");
const selectionSort = document.getElementById("selection");
const quickSort = document.getElementById("quick");
const mergeSort = document.getElementById("merge");

// hide all sorting buttons
function hiddenSortButton() {
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  mergeSort.disabled = true;
}

// show all sorting buttons
function visibleSortButton() {
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
  mergeSort.disabled = false;
  rangeBar.disabled = false;
}

// Random numbers created on newArray button
function arrayCreate(num) {
  bars.innerHTML = "";
  for (let i = 1; i <= num; i++) {
    let value = Math.floor(Math.random() * 100) + 1;
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = value + "%";
    bars.appendChild(bar);
  }
}

// Range for no of bars
const rangeBar = document.getElementById("arr-sz");
rangeBar.addEventListener("input", function () {
  arrayCreate(parseInt(rangeBar.value));
});

// Creating bars on click of newArray button
const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");

newArray.addEventListener("click", function () {
  arrayCreate(parseInt(rangeBar.value));
  range1.style.visibility = "visible";
  range2.style.visibility = "visible";
  visibleSortButton();
});

// speed bar
const speedBar = document.getElementById("swap-speed");
let delay = 1000;
speedBar.addEventListener("input", function () {
  let swapSpeed = speedBar.value;
  delay = 1000 - parseInt(swapSpeed);
});

// Function which delay in animation
function waitForMe(milisec) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, milisec)
  );
}

// function swap
function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// disableing button and range bar
function hiddenTag() {
  rangeBar.disabled = true;
}
