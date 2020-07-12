let counter = 0;
    function changeImage() {

        
        
        if(counter == 0){
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada2.png";
            counter++;
        }
        else if(counter == 1){
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada3.png";
            counter++;
        }
        else if(counter == 2){
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada4.png";
            counter++;
        }
        else{
            document.getElementById("imgClickAndChange").src = "/img/zdrada/zdrada1.png";
            counter=0;
        }
    }
