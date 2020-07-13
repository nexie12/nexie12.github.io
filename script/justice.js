let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/justice/justice2.png";
            document.getElementById("dial").innerHTML = "Yo, did you just solve that puzzle? That's awesome!"
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/justice/justice2.png";
                document.getElementById("dial").innerHTML = "Yo, did you just solve that puzzle? That's awesome!"
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
        document.getElementById("imgClickAndChange").src = "/img/justice/justice1.png";
        document.getElementById("dial").innerHTML = "You don't have to ask me. I'd never miss a party."
        document.getElementById("all").style.display = "none";
        setTimeout(() => { 
            document.getElementById("retry").style.display = "inline-block";
         }, 1000);
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/justice/justice2.png";
        document.getElementById("dial").innerHTML = "Yo, did you just solve that puzzle? That's awesome!"
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        document.getElementById("imgClickAndChange").src = "/img/justice/justice1.png";
        document.getElementById("dial").innerHTML = "That totally sounds like something I would've done.<br>Sure, let's go. The more the merrier, right?"
        document.getElementById("all").style.display = "none";
        setTimeout(() => { 
            document.getElementById("retry").style.display = "inline-block";
         }, 1000);
    }
