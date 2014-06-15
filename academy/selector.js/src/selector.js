
var traverseDomAndCollectElements = function(startEl, matchFunc, matchParam) {

  var resultSet = [];
  var innerRecursiveFunc = function (startEl, matchFunc, matchParam) {
    if(typeof startEl === "undefined") startEl = document.body;
    else{
      if(matchFunc(startEl)) {
        resultSet.push(startEl);
      }
      for (var i = 0; i < startEl.children.length; i++) {
        innerRecursiveFunc(startEl.children[i],matchFunc,matchParam);
      }
    }
  };

  innerRecursiveFunc(startEl,matchFunc,matchParam);//calls it the first time

  return resultSet;
};


var $ = function(selector) {
  var elements = [];
  var matchParam = {};
  console.log(selector.substring(1));
  if(selector[0] === "#"){
    matchParam.id = selector.substring(1);
  } //else if (selector[0] === "."){
  //   matchParam.className = selector.substring(1);
  // } else {

  // }

  var match;
  if(selector[0] === "#"){
    //id selector
    var idtext = selector.slice(1);
    match = function(element){
      return element.id === idtext;
    };
  } else if (selector[0] === "."){
    //class selector
    var classtext = selector.slice(1);
    match = function(element){
      return element.classList.contains(classtext);
    };
  } else if (selector.indexOf(".") > 0){
    //tag.classname
    var components = selector.split(".");
    var tag = components [0];
    var className = components[1];
    match = function(element){
      return element.tagName.toLowerCase() === tag &&
        element.classList.contains(className);
    };
  } else {
    match = function(element){
      return selector === element.tagName.toLowerCase();
    };
  }



  // your code here
  // your code here
  // your code here
  elements = traverseDomAndCollectElements(document.body,match,matchParam);

  return elements;
};



