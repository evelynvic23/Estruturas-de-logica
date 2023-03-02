function enviar(){

    var quantidade = document.getElementById("numeros3").value;
    var peso = document.getElementById("numeros2").value;
    var nome = document.getElementById("numeros1").value;



  if(peso < 100){
    alert("O peso da peça é insuficiente")
  }else{
    if(quantidade > 10){
        alert("A capacidade é apenas até 10!")
    }else{
    if(nome.length <3){
        alert("Quantidade de caracteres insuficientes")
    } else{
        alert("Peça cadastrada!!!")
    }
  }





}



}