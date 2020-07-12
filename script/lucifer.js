let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer4.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/lucifer/lucifer1.png";
            counter=0;
        }
    }
