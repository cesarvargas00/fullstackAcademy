var words = function(str){
  var wordsArr = str.split(/\s/g);
  var returnObj = {};

  for (var i = 0; i<wordsArr.length;i++){
    var keyName = wordsArr[i];
    //ignores pontuation and sets to lower case
    keyName = keyName.replace(/[+-.,¡:¿?!!@#$%^&*();\\/|<>]/g, "")
      .toLowerCase();

    if(keyName.length!==0){
      if(returnObj[keyName] === undefined || typeof returnObj[keyName] === "function"){
        returnObj[keyName] = 0;
      }
      returnObj[keyName] += 1;
    }
  }
  return returnObj;
}