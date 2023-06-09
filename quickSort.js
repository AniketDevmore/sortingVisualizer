// Quick sort
async function divideInto(blocks, low, high) {
  let i = low - 1;

  blocks[high].style.background = "red";

  for (let j = low; j <= high - 1; j++) {
    // blocks[j].style.background = "blue";

    if (
      parseInt(blocks[j].style.height) < parseInt(blocks[high].style.height)
    ) {
      i++;

      blocks[j].style.background = "orange";
      blocks[i].style.background = "white";
      swap(blocks[i], blocks[j]);

      await waitForMe(delay);
    }
  }

  await waitForMe(delay);
  // // blocks[i + 1].style.background = "red";
  // // blocks[high].style.background = "red";
  swap(blocks[i + 1], blocks[high]);

  await waitForMe(delay);

  for (let k = 0; k < blocks.length; k++) {
    if (blocks[k].style.background != "yellow")
      blocks[k].style.background = "green";
  }

  return i + 1;
}

async function quickSort1(blocks, low, high) {
  if (low < high) {
    let pivotIndex = await divideInto(blocks, low, high);
    await quickSort1(blocks, low, pivotIndex - 1);
    await quickSort1(blocks, pivotIndex + 1, high);
  }
}

quickSort.addEventListener("click", async function () {
  hiddenSortButton();
  hiddenTag();
  let blocks = document.querySelectorAll(".bar");
  let low = 0;
  let high = blocks.length - 1;
  await quickSort1(blocks, low, high);
  visibleSortButton();
});
