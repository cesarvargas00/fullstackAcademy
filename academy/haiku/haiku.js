  var fs = require("fs");
  var result = {};
  fs.readFile("cmudict.txt", function(err, data){
    if(err) {
      return console.log(err);
    }
    var lines = data.toString().split("\n");
    lines.forEach(function(line){
      var line_split = line.split("  ");
      var word = line_split[0];
      if (typeof line_split[1] !== "undefined"){
        var layout = line_split[1].split(" ");
        var numberOfSyl = 0;
        var i = layout.length;
        while(i--){
          if (layout[i].match(/\d/)){
            numberOfSyl++;
          }
        }
        if(typeof result[numberOfSyl] === "undefined"){
          result[numberOfSyl] = [];
        }
          result[numberOfSyl].push(word);
      }
    });
    console.log(result);

  });