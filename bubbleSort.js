// Bubble sort
async function bubbleSort1(blocks) {
  for (let i = 0; i < blocks.length - 1; i++) {
    for (let j = 0; j < blocks.length - 1; j++) {
      if (
        parseInt(blocks[j].style.height) > parseInt(blocks[j + 1].style.height)
      ) {
        blocks[j].style.backgroundColor = "red";
        blocks[j + 1].style.backgroundColor = "red";

        await waitForMe(delay);

        swap(blocks[j], blocks[j + 1]);

        blocks[j].style.backgroundColor = "yellow";
        blocks[j + 1].style.backgroundColor = "yellow";
      }
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "green";
  }

  blocks[0].style.backgroundColor = "green";
}

bubbleSort.addEventListener("click", async function () {
  hiddenSortButton();
  hiddenTag();
  let blocks = document.querySelectorAll(".bar");
  await bubbleSort1(blocks);
  visibleSortButton();
});
