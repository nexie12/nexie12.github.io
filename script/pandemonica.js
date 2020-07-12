let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica4.png";
            counter++;
        }
        else if(counter == 3){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica5.png";
            counter++;
        }
        else if(counter == 4){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica6.png";
            counter++;
        }
        else if(counter == 5){
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica7.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/pandemonica/pandemonica1.png";
            counter=0;
        }
    }
