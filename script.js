function print(){

   num =document.getElementById("start").value;
   alrt =document.getElementById("alrt").value;

   pomp = prompt('Enter a number = ');

   if(num == pomp){

    document.getElementById("alrt").innerHTML="Correct Answer";

   }
   else{
     document.getElementById("alrt").innerHTML="Wrong Answer !!";
   }

 
     }

