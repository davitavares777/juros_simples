
 function multiplicação(){

    let C = parseInt(document.getElementById('capital').value);
    let T = parseInt(document.getElementById('tempo').value);
    let I = parseInt(document.getElementById('porcentagem').value);

    let multiplicação = C * T * I

    document.getElementById('resultado').textContent = 'Resultado: '+ multiplicação;


 }
 M = soma 
 function soma(){

    let J = parseInt(document.getElementById('juros').value);
    let C = parseInt(document.getElementById('capital').value);

    let soma = J + C;

    document.getElementById('resultado do montante final').textContent = 'resultado do montante final: '+ soma;

   
}







