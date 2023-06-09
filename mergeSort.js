// Merge sort
async function merge(blocks, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitForMe(delay);

    blocks[low + i].style.background = "white";
    left[i] = blocks[low + i].style.height;
  }

  for (let i = 0; i < n2; i++) {
    await waitForMe(delay);

    blocks[mid + 1 + i].style.background = "yellow";
    right[i] = blocks[mid + 1 + i].style.height;
  }

  await waitForMe(delay);
  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    await waitForMe(delay);

    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 === blocks.length) {
        blocks[k].style.background = "green";
      } else {
        blocks[k].style.background = "lightgreen";
      }

      blocks[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (n1 + n2 === blocks.length) {
        blocks[k].style.background = "green";
      } else {
        blocks[k].style.background = "lightgreen";
      }

      blocks[k].style.height = right[j];
      j++;
      k++;
    }
  }

  while (i < n1) {
    await waitForMe(delay);

    if (n1 + n2 === blocks.length) {
      blocks[k].style.background = "green";
    } else {
      blocks[k].style.background = "lightgreen";
    }
    blocks[k].style.height = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    await waitForMe(delay);

    if (n1 + n2 === blocks.length) {
      blocks[k].style.background = "green";
    } else {
      blocks[k].style.background = "lightgreen";
    }
    blocks[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort1(blocks, left, right) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((right + left) / 2);
  await mergeSort1(blocks, left, mid);
  await mergeSort1(blocks, mid + 1, right);
  await merge(blocks, left, mid, right);
}

mergeSort.addEventListener("click", async function () {
  hiddenSortButton();
  hiddenTag();
  let blocks = document.querySelectorAll(".bar");
  let left = 0;
  let right = parseInt(blocks.length) - 1;
  await mergeSort1(blocks, left, right);
  visibleSortButton();
});

// function merge(block1, block2) {
//   let i = 0; // block1
//   let j = 0; //block2
//   let finalArray = [];
//   console.log(block1, block2);
//   while (i < block1.length && j < block2.length) {
//     if (parseInt(block2[j].style.height) > parseInt(block1[i].style.height)) {
//       let a = 0;
//       block1[a] = block1[i];
//       a++;
//       finalArray.push(block1[i]);
//       block1[i].style.background = "lightgreen";
//       i++;
//     } else {
//       let b = 0;
//       block2[b] = block2[j];
//       b++;
//       finalArray.push(block2[j]);
//       block2[j].style.background = "lightgreen";
//       j++;
//     }
//   }

//   while (i < block1.length) {
//     // there are some elements left in the block1
//     let b = 0;
//     block1[b] = block1[i];
//     b++;
//     finalArray.push(block1[i]);
//     i++;
//   }

//   while (j < block2.length) {
//     // there are some elements left in the block2
//     let b = 0;
//     block2[b] = block2[j];
//     b++;
//     finalArray.push(block2[j]);
//     j++;
//   }
//   ///console.log(i,j);
//   // this array is completed
//   // let x = [];
//   // for (let i = 0; i < finalArray.length; i++) {
//   //   x.push(finalArray[i].style.height);
//   // }
//   // console.log(x);
//   return finalArray;
// }

// function mergeSort1(arr) {
//   // base conmdition is
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let leftPartArray = [];
//   for (let i = 0; i < mid; i++) {
//     leftPartArray.push(arr[i]);
//   }
//   let rightPartArray = [];
//   for (let i = mid; i <= arr.length - 1; i++) {
//     rightPartArray.push(arr[i]);
//   }
//   // let leftPartArray = arr.slice(0, mid);
//   // let rightPartArray = arr.slice(mid);
//   let arrl = mergeSort1(leftPartArray);
//   let arrRight = mergeSort1(rightPartArray);

//   return merge(arrl, arrRight);
// }

// // console.log(mergeSort1([11, 7, 14, 1]));

// mergeSort.addEventListener("click", async function () {
//   hiddenTag();
//   let blocks = document.querySelectorAll(".bar");
//   // let left = 0;
//   // let right = parseInt(blocks.length) - 1;
//   await mergeSort1(blocks);
//   visibleTag();
// });
