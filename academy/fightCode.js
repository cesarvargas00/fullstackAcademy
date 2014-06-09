
//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
  this.started = false;
  this.shot = false;
};

Robot.prototype.onIdle = function(ev) {
      var robot = ev.robot;
      robot.clone();
      if(!this.started){
          if (robot.parentId == null) {
            robot.turn(-45);
          }
          else robot.turn(45);
          robot.move(300);
          this.started = true;
      }

      if(this.shot){
        robot.turn(-10);
        robot.turn(40);
        robot.turn (-80);
        this.shot = false;
      }
      robot.turn(70);
      robot.move(30);
    
};

Robot.prototype.onScannedRobot = function(ev) {
   var robot = ev.robot;
  var scannedRobot = ev.scannedRobot;
  
   if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
     return 0;
  }
  
  
    robot.fire();
    robot.move(20);
    this.shot = true;
  
  
};  

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.turn(ev.bearing + 180);
    robot.move(100);
                            // angle with the wall.
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    robot.turn(ev.bearing);
    robot.move(50);
};
