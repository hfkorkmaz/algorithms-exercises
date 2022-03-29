/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  const arr = [...nums];

  const sort = (arr, range) => {
    if(range === 0){
      return;
    }

    let swapHappened = false;

    for (let i = 0; i < range; i++) {
      if (i + 1 === range) {
        break;
      }

      const element = arr[i];
      const nextElement = arr[i + 1];

      if (element > nextElement) {
        arr[i + 1] = element;
        arr[i] = nextElement;
        swapHappened = true;
      }
    }
    if (swapHappened) {
      sort(arr, range - 1);
    }
  };

  sort(arr, arr.length);

  return arr;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
