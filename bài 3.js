/**bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
Input:	arr1 = ['John', 'Pete', 'Mary']
	arr2 = ['Mary', 'Henry', 'Harry']

Output: ['John', 'Pete', 'Mary', 'Henry']

Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.
*/
arr1 = ["John", "Pete", "Mary", "ManhVDb"];
arr2 = ["Mary", "Henry", "Harry", "ManhVDb"];

// Output: ['John', 'Pete', 'Mary', 'Henry']
function arrFilter(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) === false) {
        arr1.push(arr2[i]);
    }
  }
  return arr1;
}

console.log(arrFilter(arr1,arr2))
