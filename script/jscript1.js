

function enviar(){


    var num = document.getElementById("numeros").value;


    for(var x = 0; x <= num; x++){

        if(x % 2 == 0)
        {
            if(x == 0){
                document.getElementById("texto").innerHTML += "<p>"+ x + ": Número é 0 </p>";
          
        } else{
            document.getElementById("texto").innerHTML += "<p>"+ x + ": O número é par  </p>";
           
        
        }
    }else{
        document.getElementById("texto").innerHTML += "<p>"+ x + ": O número é ímpar   </p>";
    }

       
        }
}








  




