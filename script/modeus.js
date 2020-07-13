let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/modeus/modeus1.png";
            document.getElementById("dial").innerHTML = "You and me. Now."
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/modeus/modeus1.png";
                document.getElementById("dial").innerHTML = "You and me. Now."
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
        ded = true;
        document.getElementById("dial").innerHTML = "They always say that... and they always try to run away.<br>I'll have to break your knees, just in case."
        document.getElementById("all").style.display = "none";
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/modeus/modeus1.png";
        document.getElementById("dial").innerHTML = "You and me. Now."
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        document.getElementById("imgClickAndChange").src = "/img/modeus/modeus2.png";
        document.getElementById("dial").innerHTML = "Demon harem? You poor fool... They will rip you to shreads, and I<br>HAVE to see this."
        document.getElementById("all").style.display = "none";
        setTimeout(() => { 
            document.getElementById("retry").style.display = "inline-block";
         }, 1000);
    }
