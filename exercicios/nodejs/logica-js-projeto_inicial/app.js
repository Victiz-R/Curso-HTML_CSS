alert('Bem vindo ao jogo do número secreto');
    const numeroSecreto = 5;
    console.log(numeroSecreto);
    //Usando prompt para pegar o número digitado pelo usuário e tranformando em inteiro
    const numeroUsuario = parseInt(prompt('Digite um número de 1 a 10'));

    switch(numeroUsuario){
        case 5:
            console.log('Você acertou')
            break;
        
        default:
        alert('Você errou');
        break;
    }
    