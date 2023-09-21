function calculaDiaria(form){
    var total;
    var name = document.getElementById("name");
    var days = parseInt(document.getElementById("days").value)
    var type = document.getElementById("type")

    if(document.getElementById("type").value === "Simples"){
        total = days * 100
    }
    else if(document.getElementById("type").value === "Médio"){
        total = days * 200
    }
    else{
        total = days * 300
    }

    alert(
        "REGISTRO DA DIÁRIA: \n"+
        "Nome do hóspede: "+name.value+
        "\nTipo de apartamento: "+type.value+
        "\nValor total: R$"+total.toFixed(2)
    )
}
