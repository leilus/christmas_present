document.addEventListener("DOMContentLoaded", function() {
var giftImages = document.querySelectorAll(".gift_box");

giftImages.forEach(function(giftImage){
    giftImage.addEventListener("click", function(){
        giftImage.className = "eyo";
        setTimeout(() => {
            giftImage.style.display = "none";
          }, "1000");
    })
})
});

var myVar;
function myFunction(){
    myVar = setTimeout(showPage, 1000);
    
}


function showPage(){
    document.getElementById("loader").style.display = "none";
}

var countdownDate = new Date("Jan 15, 2024 00:00:00").getTime();

var x = setInterval(function(){
    var nowTime = new Date().getTime();
    var distanceTime = countdownDate - nowTime;

    var days = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceTime % (1000 * 60)) / 1000);

    document.getElementById("timerButton").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distanceTime < 0) {
    clearInterval(x);
    document.getElementById("timerButton").innerHTML = "GET PRESENT";
  }
}, 1000);


function getPresent(element){
  var giftButton = element.id;

  switch(giftButton){
    case 'giftButton1':
      document.getElementById("heart1").style.display = "block";
      document.getElementById("giftButton1").innerHTML = "Unlocked!";
      document.getElementById("bubbleTea").src = "/img/bubble_teaClicked.png";
      setTimeout(function(){
        document.getElementById("heart1").style.display = "none";
      }, 800)
      break;
    case 'giftButton2':
      document.getElementById("heart2").style.display = "block";
      document.getElementById("giftButton2").innerHTML = "Unlocked!";
      document.getElementById("keyboard").src = "/img/keyboardClicked.png";
      
      setTimeout(function(){
        document.getElementById("heart2").style.display = "none";
      }, 800)
      break;
    case 'giftButton3':
      console.log("nara");
      break;
    default:
      console.log("dobranoc");
  }

}

function goToNextPage(){
  window.location.href = "http://127.0.0.1:5500/wishes.html";
}