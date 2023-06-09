// Selection sort
async function selectionSort1(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    let min = i;
    blocks[i].style.backgroundColor = "red";

    for (let j = i + 1; j < blocks.length; j++) {
      if (
        parseInt(blocks[min].style.height) > parseInt(blocks[j].style.height)
      ) {
        min = j;
      }
    }

    blocks[min].style.backgroundColor = "blue";

    await waitForMe(delay);

    blocks[min].style.backgroundColor = "red";

    await waitForMe(delay);

    swap(blocks[i], blocks[min]);

    blocks[min].style.backgroundColor = "yellow";
    blocks[i].style.backgroundColor = "green";
  }
}

selectionSort.addEventListener("click", async function () {
  hiddenSortButton();
  hiddenTag();
  let blocks = document.querySelectorAll(".bar");
  await selectionSort1(blocks);
  visibleSortButton();
});
