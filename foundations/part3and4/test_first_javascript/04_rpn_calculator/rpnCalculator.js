
function Calculator(){
	this.result = 0;
	this.stack = [];
}

Calculator.prototype.value = function(){
	return this.result;
}

Calculator.prototype.push = function(n){
	this.stack.push(n);
}

Calculator.prototype.plus = function(){
	if(this.stack.length < 2)
		throw "calculator is empty";
	var rhs = this.stack.pop();
	var lhs = this.stack.pop();
	this.result = lhs + rhs;
	this.stack.push(this.result);
}

Calculator.prototype.minus = function(){
	if(this.stack.length < 2)
		throw "calculator is empty";
	var rhs = this.stack.pop();
	var lhs = this.stack.pop();
	this.result = lhs - rhs;
	this.stack.push(this.result);
}

Calculator.prototype.divide = function(){
	if(this.stack.length < 2)
		throw "calculator is empty";
	var rhs = this.stack.pop();
	var lhs = this.stack.pop();
	this.result = lhs / rhs;
	this.stack.push(this.result);
}

Calculator.prototype.times = function(){
	if(this.stack.length < 2)
		throw "calculator is empty";
	var rhs = this.stack.pop();
	var lhs = this.stack.pop();
	this.result = lhs * rhs;
	this.stack.push(this.result);
}