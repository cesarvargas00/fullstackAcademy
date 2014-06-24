var Ev3 = require ("./module/Ev3.js");
var Ev3_base = Ev3.base;

var robot = new Ev3_base("/dev/tty.EV3-SerialPort"); // put your bluetooth socket.
var state;

robot.connect(function(){
  robot.start_program(function(target){
    var loop = function(){
        target.setMotors(100,0,0,100);
        setTimeout(function(){
          target.setMotors(-100,0,0,-100);
          setTimeout(function(){
            target.setMotors(-100,0,0,100);
            setTimeout(function(){
              loop();
            },1000)
          }, 5200)
        }, 5200)
      };
      loop();
  });
});
