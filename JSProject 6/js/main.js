var time = 0;
var running = 0;


function toggle () {
     if (running == 0){
       running = 1;
       inc();
       document.getElementById('toggle').innerHTML = 'PAUSE';
     }else{
       running = 0;
       document.getElementById('toggle').innerHTML = 'RESUME';
     }
}

function reset () {
     time = 0;
     running =0;
     document.getElementById('toggle').innerHTML = 'START';
     document.getElementById('timer').innerHTML = '0:00:00:00';
}


function inc (){
  if (running == 1){
    setTimeout(function(){
      time++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10 % 60);
      var hours = Math.floor(time/10/60/60);
      var milisec = time % 10;

      if ( mins < 10){
        mins = "0" + mins;
      }
      if (secs < 10){
        secs = "0" + secs;
      }
      document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs + ":" + milisec + "0";
      inc();
    }, 100)
  }
}
