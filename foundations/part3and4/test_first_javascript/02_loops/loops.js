	function repeat(str,times){
		var arr = [];
		for(var i = 0; i < times; i++)
			arr.push(str);
		return arr.join("");
	}

	function join(arr, delimiter){
    		var res = "";
        var len = arr.length;
        var delim = "";
        if(typeof delimiter != "undefined") delim = delimiter;
    		for(var i = 0; i < len; i++){
    			res += delim;
    			res += arr[i];
    		}
    		if(typeof delimiter!= "undefined") res = res.slice(1);
    		return res;
	}

	function sum (arr){
		var sum = 0;
		for(var i = 0; i < arr.length; i++)
			sum += arr[i];
		return sum;
	}

	function paramify(object){
		res = "";
		for (var o in object){
			if(object.hasOwnProperty(o))
				res += "&" + o + "=" + object[o];
		}
		//splits into an array, slices the first element (empty because of & above), sorts alphabetically, and join back to a string with & delimiter
		return res.split("&").slice(1).sort().join("&");
	}

	function factorial(n){
		if (n === 0)
			return 1;
		return factorial(n-1) * n;
	}

	function concat_string(){
		var args = Array.prototype.slice.call(arguments);
		return args.join("");
	}
