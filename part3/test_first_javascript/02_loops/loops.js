	function repeat(str,times){
		var arr = [];
		for(var i = 0; i < times; i++)
			arr.push(str);
		return arr.join("");
	}
	
	function join(arr, delimiter){
    	var res = "";
    	for(var i = 0; i < arr.length; i++){
    		res += arr[i];
    		if(delimiter) res += delimiter;
    	}
    	if(delimiter) res = res.slice(0,res.length - 1);
    	return res;
	}

	function sum (arr){
		var sum = 0;
		for(var i = 0; i < arr.length; i++)
			sum += arr[i];
		return sum;
	}

	// describe("looping over hashes", function() {
	// 	describe("paramify", function() {

	// 		it("skips properties of the object's prototype", function() {
	// 			var Alphabet = function() { 
	// 				this.a = 1;
	// 				this.b = 2;
	// 			}
	// 			Alphabet.prototype = {c: 3};
	// 			expect(paramify(new Alphabet())).toEqual("a=1&b=2");
	// 		});
	// 	});
 	//  });	  

	function paramify(object){
		res = "";
		for (var o in object){
			res += "&" + o + "=" + object[o];
		}
		//splits into an array, slices the first element (empty because of & above), sorts alphabetically, and join back to a string with & delimiter
		return res.split("&").slice(1).sort().join("&");
	}

