var compute = function(s1,s2){
  var ham = 0;
  var shorterStringSize = s2.length;
  if (s1.length < s2.length){
    shorterStringSize = s1.length;
  }

  for (var i = 0; i < shorterStringSize; i++){
    if(s1.charAt(i) !== s2.charAt(i))
      ham++;
  }
  return ham;
};