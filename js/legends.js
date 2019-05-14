var img=["Caustic","Lifeline","Bloodhound","Mirage","Wraith","Gibraltar","Pathfinder","Bangalore","Octane"];
        var img_text=["caustic-text","lifeline-text","bloodhound-text","mirage-text","wraith-text","gibraltar-text","pathfinder-text","bangalore-text","octane-text"]
       
        function makeInvisible(name){
            return function(){
                document.getElementById(name).style.visibility="hidden";
            }
        }
        function makeVisible(name){
            return function(){
                document.getElementById(name).style.visibility="visible";
            }
        }
        for(i=0;i<img.length;i++){
            document.getElementById(img[i]).addEventListener("mouseover",makeVisible(img_text[i]));
            document.getElementById(img[i]).addEventListener("mouseout",makeInvisible(img_text[i]));
        }