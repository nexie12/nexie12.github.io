let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/azazel/azazel2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/azazel/azazel3.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/azazel/azazel1.png";
            counter=0;
        }
    }
