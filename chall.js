function migratoryBirds(arr) {
  // Write your code here
  // sort array and have a count ++
  const sortedArr = arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i <= sortedArr.length; i += 1) {
    for (let j = 0; j <= sortedArr.length; j += 1) {
      if (sortedArr[i] === sortedArr[j]) count++;
    }
  }
  console.log(count);
}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
