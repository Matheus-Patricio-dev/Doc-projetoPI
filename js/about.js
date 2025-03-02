document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o campo de e-mail do footer (caso exista na página)
    const footerEmail = document.getElementById("footer-email");
    const errorFooterEmail = document.getElementById("error-footer-email");

    if (footerEmail && errorFooterEmail) {
        // Função para exibir erro
        const showError = (input, errorElement, message) => {
            input.classList.add("error");
            errorElement.textContent = message;
            errorElement.style.color = "red"
            errorElement.style.display = "block";
        };

        // Função para remover erro
        const removeError = (input, errorElement) => {
            input.classList.remove("error");
            errorElement.textContent = "";
            errorElement.style.display = "none";
        };

        // Função de validação de e-mail
        const validateEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const value = footerEmail.value.trim();

            if (value === "") {
                removeError(footerEmail, errorFooterEmail); // Remove erro se estiver vazio
            } else if (!emailRegex.test(value)) {
                showError(footerEmail, errorFooterEmail, "Digite um e-mail válido.");
            } else {
                removeError(footerEmail, errorFooterEmail);
            }
        };

        // Validação em tempo real no input do e-mail do footer
        footerEmail.addEventListener("input", validateEmail);
    }
});
