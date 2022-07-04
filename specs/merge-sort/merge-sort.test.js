/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  const nums1 = [...arr1];
  const nums2 = [...arr2];

  let sortedArr = [];

  const alreadyAddedElementsIndexesOfSecondArray = [];

  for (let index1 = 0; index1 < arr1.length; index1++) {
    const element1 = arr1[index1];

    for (let index2 = 0; index2 < arr2.length; index2++) {
      const element2 = arr2[index2];

      if (element1 < element2) {
        sortedArr.push(element1);
        nums1.shift();
        break;
      } else if (
        alreadyAddedElementsIndexesOfSecondArray.findIndex(
          (el) => el === index2
        ) === -1
      ) {
        sortedArr.push(element2);
        alreadyAddedElementsIndexesOfSecondArray.push(index2);
        nums2.shift();
      }
    }
  }
  if (nums1.length) {
    sortedArr = [...sortedArr, ...nums1];
  }
  if (nums2.length) {
    sortedArr = [...sortedArr, ...nums2];
  }

  return sortedArr;
};

const mergeSort = (nums) => {
  if (nums.length === 1) return nums;
  const firstHalf = nums.slice(0, Math.ceil(nums.length / 2));
  const secondHalf = nums.slice(Math.ceil(nums.length / 2), nums.length);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
