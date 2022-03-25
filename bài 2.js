/**bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
Input: const person = [
	{ name: 'John', age: 24 },
	{ name: Pete, age: 25 },
	{ name: Mary', age: 28 }
]

Output: ['John', 'Pete', 'Mary'].
*/

b2:
const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28}
];
const map1 = person.map(x =>x.name);
	
console.log(map1);


