function letrasRepetidas(string) {
    let letras = [];
    let acumuladoQuantidade = [];
    
    for (let i = 0; i < string.length; i++) {
        let letra = string[i];
        let limite = i;
        let quantidade = 0;
 
        for (let j = 0; j < limite; j++) {
            if (string[j] === letra) quantidade++;
        }
        acumuladoQuantidade.push(quantidade);
    }
 
    for (let i = 0; i < acumuladoQuantidade.length; i++) {
        if (acumuladoQuantidade[i] === 1) letras.push(string[i]);
    }
 
    return letras;
}
