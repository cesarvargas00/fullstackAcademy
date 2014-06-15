function translate(str) {

	function isVowel(c) {
		var vowels = ["a","e","i","o","u"];
		for (var i = 0; i < vowels.length; i++)
			if(c === vowels[i]) return true;
		return false;
	}

	var ar = str.split(" "); //creates an array
	for(var i = 0; i < ar.length; i++){
		while(!isVowel(ar[i].charAt(0)))
			ar[i] = ar[i].slice(1) + ar[i].charAt(0);
		if(ar[i].charAt(0) === "u" && ar[i].slice(-1) === "q")
			ar[i] = ar[i].slice(1) + ar[i].charAt(0);
		ar[i] += "ay";
	}
	return ar.join(" ");
}