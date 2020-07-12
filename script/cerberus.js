let counter = 0;
let ded = false;
    function changeImage() {
        if(counter == 0){
            document.getElementById("ans1").style.display = "inline";
            document.getElementById("ans2").style.display = "inline";
            document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus1.png";
            document.getElementById("cerberusdial").textContent = "Are you a human? A real human? Please, take us with you."
            counter++;
        }
        if(ded == true){
            window.location.replace("/badend.html");
        }

        // function cerans1(){
        //     document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus2.png";
        //     document.getElementById("cerberusdial").textContent = "Yes! At last! It's time to corrupt the mortal realm!"
        // }
        // if(counter == 0){
        //     document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus2.png";
        //     document.getElementById("cerberusdial").textContent = "Yes! At last! It's time to corrupt the mortal realm!"
        //     counter++;
        // }
        // else if(counter == 1){
        //     document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus3.png";
        //     counter++;
        // }
        // else{
        //     document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus1.png";
        //     counter=0;
        // }
    }
    function cerans1(){
            document.getElementById("imgClickAndChange").src = "/img/cerberus/cerberus2.png";
            document.getElementById("cerberusdial").textContent = "Yes! At last! It's time to corrupt the mortal realm!"
            document.getElementById("ans1").style.display = "none";
            document.getElementById("ans2").style.display = "none";
            counter = 0;
    }
    function cerans2(){
        ded = true;
        document.getElementById("cerberusdial").textContent = "We need a human to cross the hell's gate. You don't have to be in one piece though"
        document.getElementById("ans1").style.display = "none";
        document.getElementById("ans2").style.display = "none";
    }
