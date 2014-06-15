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

//i've done this way.
// function map(arr, fun){
// 	var newArray = [];
// 	for(var i = 0; i < arr.length; i++){
// 		ret.push(fun(arr[i]));
// 	}
// 	return ret;
// }

//their way of doing it.
function map(arr, fun){
  var newArray = [];
  forEach(arr,function(currentValue){
    var mappedValue = fun(currentValue);
    newArray.push(mappedValue);
  });
  return newArray;
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


function reduce(arr, start, fun){
	if(start === arr.length - 1) return arr[start]; //base case
	return fun(reduce(arr, start + 1, fun), arr[start]);
}

//David's done this way.
// function reduce(arr, start, fun) {
//   if arr.length < 2
//     return arr[0];
//   var newArray = [];
//   newArray.push(func(arr[0], arr[1]));
//   newArray.concat(arr.slice(2,arr.length));
//   return reduce(newArray, start, fun);
// }

// function reduce(arr,start,fun){

// }

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

function once(fun){ //is this the decorator pattern?
	this.firstTime = true;
	return function(){
		if(this.firstTime){
			fun();
			this.firstTime = false;
		}
	};
}

function wrapper(fun, wrapFun){
	return function(){
		return wrapFun(fun);
	};
}