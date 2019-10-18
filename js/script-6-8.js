'use strict'

var ProgressValue = 0,
    FirstButtonValue = 1,
    SecondButtonValue = 3,
    ThirdButtonValue = 7;
var ProgressBarWidht = 0;



$("#FirstButton").click(function(){
      ProgressValue = ProgressValue + FirstButtonValue;
      if (ProgressValue >= 100) {
      	ProgressValue = 100;
      	reboot ();
      };
      drawingBar ();
});

$("#SecondButton").click(function(){
      ProgressValue = ProgressValue + SecondButtonValue;
      if (ProgressValue >= 100) {
      	ProgressValue = 100;
      	reboot ();
      };
      drawingBar ();
});    

$("#ThirdButton").click(function(){
      ProgressValue = ProgressValue + ThirdButtonValue;
      if (ProgressValue >= 100) {
      	ProgressValue = 100;
      	reboot ();
      };
      drawingBar ();
});

 function drawingBar () {
 	ProgressBarWidht = ProgressValue;
 	$('#ProgressBar').width(ProgressBarWidht + '%');
 };

 function reboot () {
 	ProgressValue = 0;
 	
 };

