function countWords(str){
	var res = str.split(" ");
	return res.length;
}

function makeAdder(n){
	return function(p){
		return n + p;
	};
}

function forEach(arr, fun){
	for(var i = 0; i < arr.length; i++){
		fun(arr[i]);
	}
}

function map(arr, fun){
	var ret = [];
	for(var i = 0; i < arr.length; i++){
		ret.push(fun(arr[i]));
	}
	return ret;
}

function filter(arr, fun){
	var ret = [];
	for(var i = 0; i < arr.length; i++)
		if (fun(arr[i])) 
			ret.push(arr[i]);
	return ret;
}

function contains(col,value){
	for (var o in col)
		if(o === value || col[o] === value) return true;
	return false;
}

//this was difficult!! Had to use a piece of paper to think :/
function reduce(arr, start, fun){
	if(start === arr.length - 1) return arr[start]; //base case
	return fun(reduce(arr, start + 1, fun), arr[start]);
}

function countWordsInReduce(a, b){
	return countWords(a) + countWords(b); //ohh ok, thats why countWords is in this section :D
}

function sum(arr){
	return reduce(arr,0,function(a,b){return a + b});
}

function every(arr, fun){
	if (arr.length === 0) return true;
	return fun(arr[0]) && every(arr.slice(1),fun)
}

function any(arr, fun){
	fun = fun || function(i) {return i;};
	if (arr.length === 0) return false;
	return fun(arr[0]) || any(arr.slice(1),fun)
}
