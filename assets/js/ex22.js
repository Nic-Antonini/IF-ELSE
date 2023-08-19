function resposta1(form1){
    if ((form1.check3.checked) == true && (form1.check2.checked) == false && (form1.check1.checked) == false){
        alert("Certa Resposta")
    } else if ((form1.check1.checked) === false && (form1.check2.checked) === false && (form1.check3.checked) === false){
        alert("Você não selecionou nenhuma alternativa na Questão 1")
    } else{
        alert("Resposta Incorreta, tente novamente.")
    }
};

function resposta2(form2){
    if ((form2.check3.checked) == false && (form2.check2.checked) == true && (form2.check1.checked) == false){
        alert("Certa Resposta")
    } else if ((form2.check1.checked) === false && (form2.check2.checked) === false && (form2.check3.checked) === false){
        alert("Você não selecionou nenhuma alternativa na Questão 2")
    } else{
        alert("Resposta Incorreta, tente novamente.")
    } 
}