// Função para definir se o usuario e senha está correto ou não, by Everton.
function enter(){
    const user = prompt("Type your user: "); 
    const pass = prompt("Type your password: ");

    if(user && pass === 'root'){
          alert(`Bem vindo ${user}`);
          const local = window.location.href = "logado.html"; 
    }
    else{
        alert("Error");
        return enter() 
    }
}

// Arrow Function, que chama a tela de cadastro, quando o respectivo botão é acionado.
const register = () => {
    const local2 = window.location.href = "cadastrar.html";
}

// Arrow Function que quando acionada, faz voltar a tela inicial.
const index = () => {
    const local3 = window.location.href = "index.html";
}
