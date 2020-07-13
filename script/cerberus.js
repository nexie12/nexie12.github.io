let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus1.png";
            document.getElementById("dial").innerHTML = "Are you a human? A real human? Please, take us with you."
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus1.png";
                document.getElementById("dial").innerHTML = "Are you a human? A real human? Please, take us with you."
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
            document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus2.png";
            document.getElementById("dial").innerHTML = "Yes! At last! It's time to corrupt the mortal realm!"
            document.getElementById("all").style.display = "none";
            setTimeout(() => { 
                document.getElementById("retry").style.display = "inline-block";
             }, 1000);
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus1.png";
        document.getElementById("dial").innerHTML = "Are you a human? A real human? Please, take us with you."
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        ded = true;
        document.getElementById("dial").innerHTML = "We need a human to cross the hell's gate. You don't have to be in one piece though."
        document.getElementById("all").style.display = "none";
    }
