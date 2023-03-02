function cal(){

    let vInicial = parseFloat(document.getElementById('vInicial').value);
    let valorMensal = parseFloat(document.getElementById('vMensalidade').value);
    let meses = [12];
    let taxa = parseFloat(document.getElementById('juros').value);
    var simula = "Sim";
    let vAcumulado = vInicial;
    let jurosComposto = 0;
    let jurosCompostoTotal = 0;


    console.log("Valor inicial de investimento: " + vInicial);
    console.log("Valor mensal de depósito: " + valorMensal);
    console.log("Taxa de juros mensal: " + taxa);


    while(simula == "Sim"){
    
        for(let t = 1; t <= meses; t++){
            jurosComposto = (vAcumulado + taxa) / 100;
            jurosCompostoTotal += jurosComposto;
            vAcumulado += jurosComposto + valorMensal;
    
    
            console.log(t + ": " + vAcumulado);
           
        } 

        simula = prompt("Para simular o outro ano digite: Sim")


        if(simula == "sim"){


            for(let t = 1; t <= meses; t++){
                jurosComposto = (vAcumulado + taxa) / 100;
                jurosCompostoTotal += jurosComposto;
                vAcumulado += jurosComposto + valorMensal;
        
                console.log(vAcumulado);

        }

        simula = prompt("Para simular o outro ano digite: Sim")
        
        
    }
    else{
        console.log("..........................................")
    }



    }
}








   



      

        
   
    
