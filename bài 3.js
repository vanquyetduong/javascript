/**bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
Input:	arr1 = ['John', 'Pete', 'Mary']
	arr2 = ['Mary', 'Henry', 'Harry']

Output: ['John', 'Pete', 'Mary', 'Henry']

Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.
*/
arr1 = ["John", "Pete", "Mary"];
arr2 = ["Mary", "Henry", "Harry"];

// Output: ['John', 'Pete', 'Mary', '
const newArr =  [...arrl];
newArr.concat(arr2);
console.log(new Set(newArr));


const consoleArr= [new Set(newArr)];