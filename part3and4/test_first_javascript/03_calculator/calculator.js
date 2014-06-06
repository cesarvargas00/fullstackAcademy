
function Calculator () {
    this.result = 0;
}
 
Calculator.prototype.value = function() {
    return this.result;
};

Calculator.prototype.add = function(n) {
    this.result += n;
    return this.result;
};

Calculator.prototype.subtract = function(n) {
    this.result -= n;
    return this.result;
};