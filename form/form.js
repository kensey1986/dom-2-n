function hacerAlgo(){
    const nodoNumero = document.getElementById("numero");
    const numero = nodoNumero.valueAsNumber;

    const nodoNumero2 = document.getElementById("numero2");
    const numero2 = nodoNumero2.valueAsNumber;

    const nodoResultado = document.getElementById("resultado");

    const suma = numero + numero2;
    
    // nodoResultado.textContent = suma;
    // nodoResultado.textContent = `Resultado suma: ${suma}`;
    nodoResultado.innerHTML = `Resultado suma: <strong>${suma}</strong>`;
}