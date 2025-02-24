// Selecionando elementos do formulário
const form = document.querySelector('.contact-form');
const nomeInput = document.querySelector('input[placeholder="Name"]');
const sobrenomeInput = document.querySelector('input[placeholder="Last Name"]');
const emailInput = document.querySelector('input[type="email"]');
const mensagemInput = document.querySelector('textarea');

// Função para validar email
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Função para validar nome
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,100}$/;
    return regex.test(nome);
}

// Função para criar mensagem de erro
function criarMensagemErro(mensagem, elemento) {
    // Remove mensagem de erro anterior se existir
    const erroAnterior = elemento.parentElement.querySelector('.erro-mensagem');
    if (erroAnterior) erroAnterior.remove();

    // Cria novo elemento de erro
    const erro = document.createElement('div');
    erro.className = 'erro-mensagem';
    erro.style.color = 'red';
    erro.style.fontSize = '12px';
    erro.style.marginTop = '5px';
    erro.textContent = mensagem;
    
    // Insere após o elemento
    elemento.parentElement.appendChild(erro);
}

// Função para remover mensagem de erro
function removerMensagemErro(elemento) {
    const erro = elemento.parentElement.querySelector('.erro-mensagem');
    if (erro) erro.remove();
}

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
    const sucesso = document.createElement('div');
    sucesso.className = 'sucesso-mensagem';
    sucesso.style.backgroundColor = '#4CAF50';
    sucesso.style.color = 'white';
    sucesso.style.padding = '10px';
    sucesso.style.borderRadius = '5px';
    sucesso.style.marginTop = '10px';
    sucesso.style.textAlign = 'center';
    sucesso.textContent = 'Mensagem enviada com sucesso!';
    
    form.appendChild(sucesso);
    
    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        sucesso.remove();
    }, 3000);
}

// Eventos de validação em tempo real
nomeInput.addEventListener('input', () => {
    if (!validarNome(nomeInput.value)) {
        criarMensagemErro('Nome deve conter apenas letras e ter entre 2 e 100 caracteres', nomeInput);
    } else {
        removerMensagemErro(nomeInput);
    }
});

sobrenomeInput.addEventListener('input', () => {
    if (!validarNome(sobrenomeInput.value)) {
        criarMensagemErro('Sobrenome deve conter apenas letras e ter entre 2 e 100 caracteres', sobrenomeInput);
    } else {
        removerMensagemErro(sobrenomeInput);
    }
});

emailInput.addEventListener('input', () => {
    if (!validarEmail(emailInput.value)) {
        criarMensagemErro('Por favor, insira um email válido', emailInput);
    } else {
        removerMensagemErro(emailInput);
    }
});

// Evento de envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let temErro = false;

    // Validação do nome
    if (!validarNome(nomeInput.value)) {
        criarMensagemErro('Nome inválido', nomeInput);
        temErro = true;
    }

    // Validação do sobrenome
    if (!validarNome(sobrenomeInput.value)) {
        criarMensagemErro('Sobrenome inválido', sobrenomeInput);
        temErro = true;
    }

    // Validação do email
    if (!validarEmail(emailInput.value)) {
        criarMensagemErro('Email inválido', emailInput);
        temErro = true;
    }

    // Validação da mensagem
    if (mensagemInput.value.trim().length < 10) {
        criarMensagemErro('A mensagem deve ter pelo menos 10 caracteres', mensagemInput);
        temErro = true;
    }

    // Se não houver erros, envia o formulário
    if (!temErro) {
        mostrarMensagemSucesso();
        form.reset();
    }
});