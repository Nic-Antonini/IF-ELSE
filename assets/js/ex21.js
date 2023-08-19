function verifica_escolha(form){
    if(form.option[0].checked){
        alert("Parabéns!\nCor escolhida: "+form.option[0].value) 
    } else if (form.option[1].checked){
        alert("Parabéns!\nCor escolhida: "+form.option[1].value)
    } else if((form.option[0].checked) === false && (form.option[1].checked) === false && (form.option[2].checked) === false){
        alert('ATENÇÃO!\nvocê não selecionou nenhuma cor!')
    }
        else{
        alert("Parabéns!\nCor escolhida: "+form.option[2].value)
    }
}