let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/malina/malina1.png";
            document.getElementById("dial").innerHTML = "Great, more braindead idiots... Never seen your ugly face before.<br>What are you playing at?"
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/malina/malina1.png";
                document.getElementById("dial").innerHTML = "Great, more braindead idiots... Never seen your ugly face before.<br>What are you playing at?"
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
            document.getElementById("imgClickAndChange").src = "/img/malina/malina5.png";
            document.getElementById("dial").innerHTML = "Like what... video games? Sure, why not. As long as you're okay<br>with turn based strategies"
            document.getElementById("all").style.display = "none";
            setTimeout(() => { 
                document.getElementById("retry").style.display = "inline-block";
             }, 1000);
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/malina/malina1.png";
        document.getElementById("dial").innerHTML = "Great, more braindead idiots... Never seen your ugly face before.<br>What are you playing at?"
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        ded = true;
        document.getElementById("dial").innerHTML = "Fantastic. Just my luck to find another masochist creep."
        document.getElementById("all").style.display = "none";
    }
