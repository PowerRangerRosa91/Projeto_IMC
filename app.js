
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== ''&& altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'está abaixo do peso.';
        }else if (valorIMC < 25){
            classificacao = 'está com o peso ideal. Parabéns!';
        }else if(valorIMC < 30){
            classificacao = 'está levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao =  'está acima do peso com obesidade grau I';
        }else if (valorIMC < 40){
            classificacao = 'está acima do peso com obesidade grau II';
        }else {
            classificacao = 'está acima do peso com obesidade grau III. Cuidado!';
        }
                        
            resultado.textContent = `${nome}, seu IMC ${classificacao}! `;
    }else { 
        resultado.textContent = 'Preencha todos os campos!'

        }
    }

     

calcular.addEventListener('click', imc);









