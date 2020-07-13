let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/Pandemonica2.png";
            document.getElementById("dial").innerHTML = "Name's Pandemonica, Hell's Customer Service.<br>How may I serve you?"
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/pandemonica/Pandemonica2.png";
                document.getElementById("dial").innerHTML = "Name's Pandemonica, Hell's Customer Service.<br>How may I serve you?"
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
        ded = true;
        document.getElementById("dial").textContent = "You thought you're leaving hell alive? How Delusional."
        document.getElementById("all").style.display = "none";
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/pandemonica/Pandemonica2.png";
        document.getElementById("dial").innerHTML = "Name's Pandemonica, Hell's Customer Service.<br>How may I serve you?"
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        document.getElementById("imgClickAndChange").src = "/img/pandemonica/Pandemonica1.png";
        document.getElementById("dial").innerHTML = "Sweet of you to offer. I could really use some coffee.<br>I'm not myself without it."
        document.getElementById("all").style.display = "none";
        setTimeout(() => { 
            document.getElementById("retry").style.display = "inline-block";
         }, 1000);
    }
