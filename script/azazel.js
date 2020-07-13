let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/azazel/azazel1.png";
            document.getElementById("dial").innerHTML = "Oh my heavens! What would a living human be doing in hell?<br>Most unusual."
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "none";
                document.getElementById("badend").style.display = "none";
                document.getElementById("badend1").style.display = "inline-block";
             }, 5000);
             setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend1").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/azazel/azazel1.png";
                document.getElementById("dial").innerHTML = "Oh my heavens! What would a living human be doing in hell?<br>Most unusual."
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 10000);
        }
    }
    function ans1(){
            document.getElementById("imgClickAndChange").src = "/img/azazel/azazel2.png";
            document.getElementById("dial").innerHTML = "Oh, you too? Let me guess, thesis on Modern Sin? Or is it<br>Demonology? We should join forces!"
            document.getElementById("all").style.display = "none";
            setTimeout(() => { 
                document.getElementById("retry").style.display = "inline-block";
             }, 1000);
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/azazel/azazel1.png";
        document.getElementById("dial").innerHTML = "Oh my heavens! What would a living human be doing in hell?<br>Most unusual."
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        ded = true;
        document.getElementById("dial").innerHTML = "You won't find many here. Lucky for you, I know a better place.<br>Please, hold my hand."
        document.getElementById("all").style.display = "none";
    }
