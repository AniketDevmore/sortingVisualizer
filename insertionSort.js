// Insertion sort
async function insertionSort1(blocks) {
  // blocks[0].style.backgroundColor = "green";
  for (let i = 1; i < blocks.length; i++) {
    let currentValue = blocks[i].style.height;

    blocks[i].style.backgroundColor = "#191919";

    for (var j = i - 1; j >= 0; j--) {
      if (parseInt(blocks[j].style.height) > parseInt(currentValue)) {
        blocks[j + 1].style.height = blocks[j].style.height;
        blocks[j].style.backgroundColor = "red";
      } else {
        break;
      }

      blocks[i].style.backgroundColor = "#191919";

      await waitForMe(delay);

      for (let k = i; k >= 0; k--) {
        blocks[k].style.background = "green";
      }
    }

    blocks[j + 1].style.height = currentValue;

    blocks[i].style.background = "green";
  }
}

insertionSort.addEventListener("click", async function () {
  hiddenSortButton();
  hiddenTag();
  let blocks = document.querySelectorAll(".bar");
  await insertionSort1(blocks);
  visibleSortButton();
});
