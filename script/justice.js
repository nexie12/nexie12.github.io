let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/justice/justice2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/justice/justice3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/justice/justice4.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/justice/justice1.png";
            counter=0;
        }
    }
