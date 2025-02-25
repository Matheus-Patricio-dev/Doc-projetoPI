document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Seleciona os campos
    const name = document.getElementById("name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const footerEmail = document.getElementById("footer-email");
    const message = document.getElementById("message");

    // Seleciona as mensagens de erro
    const errorName = document.getElementById("error-name");
    const errorLastName = document.getElementById("error-last-name");
    const errorEmail = document.getElementById("error-email");
    const errorFooterEmail = document.getElementById("error-footer-email");
    const errorMessage = document.getElementById("error-message");

    // Função para exibir erro
    function showError(input, errorElement, message) {
        input.classList.add("error");
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    // Função para remover erro
    function removeError(input, errorElement) {
        input.classList.remove("error");
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    // Função genérica para validar campos de texto
    function validateTextInput(input, errorElement, minLength, fieldName) {
        const value = input.value.trim();

        if (value === "") {
            removeError(input, errorElement); // Remove erro se estiver vazio
        } else if (value.length < minLength) {
            showError(input, errorElement, `${fieldName} deve ter pelo menos ${minLength} caracteres.`);
        } else {
            removeError(input, errorElement);
        }
    }

    // Validação em tempo real para `name` e `lastName`
    name.addEventListener("input", () => validateTextInput(name, errorName, 3, "O nome"));
    lastName.addEventListener("input", () => validateTextInput(lastName, errorLastName, 3, "O sobrenome"));

    // Validação em tempo real do e-mail
    email.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            removeError(email, errorEmail); // Remove erro se estiver vazio
        } else {
            validateTextInput(email, errorEmail, 3, "Digite um e-mail válido.");
        }
    });

    footerEmail.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (footerEmail.value.trim() === "") {
            removeError(footerEmail, errorFooterEmail); // Remove erro se estiver vazio
        } else {
            validateTextInput(footerEmail, errorFooterEmail, 3, "Digite um e-mail válido.");
        }
    });

    // Validação em tempo real da mensagem
    message.addEventListener("input", () => {
        validateTextInput(message, errorMessage, 10, "A mensagem");
    });

    // Validação final no submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio se houver erros
        let isValid = true;

        // Validações finais antes do envio
        if (name.value.trim().length < 3) {
            showError(name, errorName, "O nome deve ter pelo menos 3 caracteres.");
            isValid = false;
        }

        if (lastName.value.trim().length < 3) {
            showError(lastName, errorLastName, "O sobrenome deve ter pelo menos 3 caracteres.");
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() !== "" && !emailRegex.test(email.value.trim())) {
            showError(email, errorEmail, "Digite um e-mail válido.");
            isValid = false;
        }

        if (footerEmail.value.trim() !== "" && !emailRegex.test(footerEmail.value.trim())) {
            showError(footerEmail, errorFooterEmail, "Digite um e-mail válido.");
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, errorMessage, "A mensagem deve ter pelo menos 10 caracteres.");
            isValid = false;
        }

        // Se todos os campos estiverem válidos, envia o formulário
        if (isValid) {
            alert("Formulário enviado com sucesso! 🎉");
            form.submit();
        }
    });
});