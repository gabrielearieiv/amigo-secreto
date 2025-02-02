// Amigo Secreto

let amigosSecretos = [];

function adicionarAmigo() {
    let validar = document.querySelector('input').value;
    if (validar == '') {
        alert('Insira um nome para o sorteio, por favor!');
        return;
    } else {
        let input = document.querySelector('input');
        let nome = input.value;
        amigosSecretos.push(nome);
        apagar();
        listaAmigos();
    }
    console.log(amigosSecretos);
}

function apagar() {
    let input = document.querySelector('input');
    input.value = '';
}

function listaAmigos() {
    let lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = ''; 
    for (let i = 0; i < amigosSecretos.length; i++) { 
        lista.innerHTML += '<li>' + amigosSecretos[i] + '</li>';
    }
}

function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * amigosSecretos.length);
    let nomeSorteado = amigosSecretos[numeroAleatorio];
    
    // Remove o nome sorteado do array
    amigosSecretos.splice(numeroAleatorio, 1);
    
    // Exibe o nome sorteado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Amigo sorteado foi ' + nomeSorteado;
}

