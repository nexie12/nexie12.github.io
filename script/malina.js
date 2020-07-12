let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/malina/malina2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/malina/malina3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/malina/malina4.png";
            counter++;
        }
        else if(counter == 3){
            document.getElementById("imgClickAndChange").src = "/img/malina/malina5.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/malina/malina1.png";
            counter=0;
        }
    }
