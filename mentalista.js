
function chutar() {
     let numeroSecreto = parseInt(Math.random()*11);  

     var elementoResultado = document.getElementById("resultado");
     
     var ValorInserido = parseInt(document.getElementById("valorInserido").value);

     if(ValorInserido == numeroSecreto) {
       elementoResultado.innerHTML ="Parabéns! Você acertou!";
     } 
     else if(ValorInserido > 10 || ValorInserido < 0) {
         elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
     } else {
        elementoResultado.innerHTML = "Errou! O número secreto é " + numeroSecreto;
}
}