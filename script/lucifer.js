let counter = 0;
let answer2 = false
let answer4 = false
let ded = false;
let ded2 = false;
    function changeImage() {
        if(counter == 0){
                document.getElementById("imgClickAndChange").src = "/img/lucifer/b0d2.gif";
                counter++;
        }else if(counter == 1){
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("dial").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer1.png";
            document.getElementById("dial").innerHTML = "We meet at last. You've proved yourself worthy by passing all my<br>trials."
            counter++;
        }else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer1.png";
            document.getElementById("dial").innerHTML = "Pledge your soul to me and I'll make you my most treasured slave."
            counter++;
        }else if(counter == 3){
            document.getElementById("all").style.display = "inline-block";
            counter++;
        }else if(counter == 4 && answer2 == true){
            document.getElementById("all2").style.display = "inline-block";
        }else if(counter == 5 && answer4 == true){
            document.getElementById("dial").innerHTML = "You're lucky I have a thing for pancakes."
            document.getElementById("all2").style.display = "none";
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer3.png";
            setTimeout(() => { 
                document.getElementById("retry").style.display = "inline-block";
             }, 1000);
        }


        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/lucifer/b0d.gif";
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                document.getElementById("name").style.display = "none";
                document.getElementById("dial").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
        if(ded2 == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badendlucifer").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badendlucifer").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/lucifer/b0d.gif";
                document.getElementById("all").style.display = "none";
                document.getElementById("all2").style.display = "none";
                document.getElementById("retry").style.display = "none";
                document.getElementById("name").style.display = "none";
                document.getElementById("dial").style.display = "none";
                ded2 = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
        ded = true;
        document.getElementById("dial").innerHTML = "Eager little soul..."
        document.getElementById("all").style.display = "none";
    }
    function retry(){
        document.getElementById("retry").style.display = "none";
        document.getElementById("imgClickAndChange").src = "/img/lucifer/b0d.gif";
        document.getElementById("dial").style.display = "none";
        document.getElementById("name").style.display = "none";
        document.getElementById("all").style.display = "none";
        document.getElementById("all2").style.display = "none";
        counter = 0;
    }
    function ans2(){

        document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer2.png";
        document.getElementById("dial").innerHTML = "What are you trying to acomplish? You think you can enslave<br>demons to your will?"
        document.getElementById("all").style.display = "none";
        answer2 = true;
    }
    function ans3(){
        ded2 = true;
        document.getElementById("dial").innerHTML = "I see I have to teach you your place."
        document.getElementById("all2").style.display = "none";
    }
    function ans4(){
        document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer2.png";
        document.getElementById("dial").innerHTML = "Really? Is that it? You come here and try to buy me over with<br>pancakes?"
        document.getElementById("all2").style.display = "none";
        answer4 = true;
        counter++;
    }