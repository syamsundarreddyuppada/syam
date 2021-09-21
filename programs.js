///Convert Age to Days


function calcAge(age) {
	if (age < 1){
		return 0;
	}
	else{
		return age * 365;
	}
}

///Concatenate Variable Number of Input Arrays
//concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

function concat(...args) {
	const result = args.reduce((arr, value) => {
      return arr.concat(...value);
   }, []);
   return result;
   
   
   //Triangular Number Sequence
   
   function triangle(n) {
	result = 0;
	for(i=1;i<=n;i++){
		result += i;
	}
	return result;
	
}

//Array of Multiples

function arrayOfMultiples (num, length) {
	let arr = []
	let res = 0
	for (i=1;i<=length;i++){
		res = num * i;
		arr.push(res);
		res = 0;
		
		
	}
	return arr;
	
}
