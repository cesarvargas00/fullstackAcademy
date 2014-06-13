var bubbleSort = function(arr) {

  if (arr.length === 0 || arr.length === 1){
    return arr;
  }
  var swaps;
  while(swaps !== 0){
    swaps = 0;
    for(var i = 0; i < arr.length; i++){
      var temp;
      if(arr[i] > arr[i+1]){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swaps++;
      }
    }
  }
  return arr;
};

var merge = function(listOne, listTwo){
  var returnList = [];
  while(listOne.length !==0 && listTwo.length !==0){
    if(listOne.length === 0 || listTwo.length ===0){
      if(listOne.length !== 0){ returnList.concat(listOne);}
        else { returnList.concat(listTwo);}
    }
    if(listOne[0] < listTwo[0]){
      returnList.push(listOne.shift());
    } else {
      returnList.push(listTwo.shift());
    }
  }
  return returnList;
};