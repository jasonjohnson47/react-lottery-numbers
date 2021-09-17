function findMatchingNumbers(nums1: number[], nums2: number[]) {
  let matchingNumbers: number[] = nums1.filter((num) => {
    return nums2.includes(num);
  });
  return matchingNumbers.sort((a, b) => a - b);
}

export default findMatchingNumbers;
