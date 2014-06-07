//[°C] = ([°F] - 32) × 5/9

//[°F] = [°C] × 9/5 + 32 

function f2c(t){
	return (t - 32) * 5 / 9;
}

function c2f(t){
	return t * 9 / 5 + 32;
}

function Temperature(t){
	var temp = t;

	this.setFahrenheit = function(t){
		temp = t;
	};

	this.fahrenheit = function(){return temp;};

	this.setCelsius = function(t){
		temp = t * 9 / 5 + 32;
	};

	this.celsius = function(){
		return (temp - 32) * 5 / 9;
	};
}