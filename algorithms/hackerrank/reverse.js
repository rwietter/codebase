const reverse = (arr, len, array) => {
  if (len === 0) return array;
  const swap = arr[len - 1];
  array.push(swap);
  return reverse(arr, len - 1, array);
}

(() => {
  const bucket = [3, 2, 1];
  const reversedBucket = [];
  const len = bucket.length;
  const reversedNumbers = reverse(bucket, len, reversedBucket);
  console.log(`Bucket: ${bucket}\nReverse: ${reversedNumbers}`);
})();
