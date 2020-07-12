let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/modeus/modeus2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/modeus/modeus3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/modeus/modeus4.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/modeus/modeus1.png";
            counter=0;
        }
    }
