function checkVerificationCode(){
 var code = document.getElementById("code").value;
 var verificationCode = "minion";
    if(verificationCode === code){
        window.location.href = "http://127.0.0.1:5500/presents.html";
    }else{
        console.log("Niepoprawny kod");
    }
}

function playAudio(){
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("minion").style.display = "block";
}