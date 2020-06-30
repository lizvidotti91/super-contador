function calcular(){
    var inicio = window.document.getElementById('inicio').value;
    var fim = window.document.getElementById('fim').value;
    var passo = window.document.getElementById('passo').value;
    var resultado = window.document.getElementById('resultado');

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        resultado.innerHTML = `Existem campos vazios. Por favor, verifique e digite novamente`;
    } else if(passo == 0){
        window.alert('Passo igual a zero. Neste caso, consideraremos passo igual a 1.');
        passo = 1;
        resultado.innerHTML = `\u{1F6A9} `;
        for(var i = Number(inicio); i >= Number(fim); i = i - Number(passo)){
            resultado.innerHTML += `${i} \u{1F449} `;
        }
        resultado.innerHTML += `\u{270B}`;
    }else if(inicio > fim){
        // contagem decrescente
        resultado.innerHTML = `\u{1F6A9} `;
        for(var i = Number(inicio); i >= Number(fim); i = i - Number(passo)){
            resultado.innerHTML += `${i} \u{1F449} `;
        }
        resultado.innerHTML += `\u{270B}`;
    }else {
        //contagem crescente
        resultado.innerHTML = `\u{1F6A9} `;
        for(var i = Number(inicio); i <= Number(fim); i = i + Number(passo)){
            resultado.innerHTML += `${i} \u{1F449} `;
        }
        resultado.innerHTML += `\u{270B}`;
    }
}