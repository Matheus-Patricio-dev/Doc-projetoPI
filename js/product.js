document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o campo de e-mail do footer (caso exista na página)
    const footerEmail = document.getElementById("footer-email");
    const errorFooterEmail = document.getElementById("error-footer-email");
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle do menu
    burgerIcon.addEventListener('click', (e) => {
        e.preventDefault(); // Previne comportamento padrão
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Ajusta o menu ao redimensionar
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });

    
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

    // Array de planos
    const plans = [
        {
            name: "Basic",
            description: "About the plan",
            resources: ["High Speed Connection", "Geolocation"],
            price: "R$1.000/Month"
        },
        {
            name: "Premium",
            description: "About the plan",
            resources: [
                "High Speed Connection",
                "Geolocation & Maps",
                "Geospatial Analytics",
                "Equipment Monitoring & Backup System"
            ],
            price: "R$5.000/Month"
        },
        {
            name: "Ultimate",
            description: "About the plan",
            resources: [
                "High Speed Connection",
                "Geolocation & Maps",
                "Geospatial Analytics",
                "Equipment Monitoring & Backup System",
                "Disaster Monitoring and Prevention",
                "Defense Against Space Objects"
            ],
            price: "R$10.000/Month"
        }
    ];

    // Seleciona os containers
    const cardsContainer = document.getElementById("cards-container");
    const buttonsContainer = document.getElementById("buttons-container");
    // Renderiza os planos dinamicamente
    function renderPlans() {
        let cardsHTML = "";
        let buttonsHTML = "";

        plans.forEach((plan,index) => {
            cardsHTML += `
                <div class="card">
                    <h2>${plan.name}</h2>
                    <p>${plan.description}</p>
                    <h3>Resources</h3>
                    <ul>
                        ${plan.resources.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                    <div class="investment">
                        <p>Monthly plan</p>
                        <div class="investiment-price">
                            <span>Investment</span>
                            <span>${plan.price}</span>
                        </div>
                    </div>
                    <button class="order" onclick="orderPlan('${plan.name}')">Order</button>
                </div>
            `;
        });

        cardsContainer.innerHTML = cardsHTML;
        buttonsContainer.innerHTML = buttonsHTML;
    }

    // Função para comprar um plano
    window.orderPlan = function(planName) {
        alert(`You selected the ${planName} plan!`);
    }

    // Chama a função para renderizar os planos
    renderPlans();
}}); 
