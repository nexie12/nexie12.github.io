let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("all").style.display = "inline-block";
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada2.png";
            document.getElementById("dial").innerHTML = "Yo. I've heard about your harem. I'm in"
            counter++;
        }
        if(ded == true){
            document.getElementById("badendclear").style.display = "none";
            document.getElementById("badend").style.display = "inline-block";
            setTimeout(() => { 
                document.getElementById("badendclear").style.display = "inline";
                document.getElementById("badend").style.display = "none";
                document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada2.png";
                document.getElementById("dial").innerHTML = "Yo. I've heard about your harem. I'm in"
                document.getElementById("all").style.display = "none";
                document.getElementById("retry").style.display = "none";
                ded = false
                counter = 0
             }, 5000);
        }
    }
    function ans1(){
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada4.png";
            document.getElementById("dial").innerHTML = "Too bad, I'm coming anyway. Go ahead try to stop me."
            document.getElementById("all").style.display = "none";
            setTimeout(() => { 
                document.getElementById("retry").style.display = "inline-block";
             }, 1000);
    }
    function retry(){
        document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada2.png";
        document.getElementById("dial").innerHTML = "Yo. I've heard about your harem. I'm in"
        document.getElementById("all").style.display = "none";
        document.getElementById("retry").style.display = "none";
        counter = 0;
    }
    function ans2(){
        ded = true;
        document.getElementById("dial").innerHTML = "Holy shit. Let me put you out of your misery."
        document.getElementById("all").style.display = "none";
    }
