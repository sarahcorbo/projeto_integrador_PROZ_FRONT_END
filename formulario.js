let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// Mostrar popup de campo obrigatório
function togglePopup(input, label) {
    input.addEventListener('focus', () => {
        label.classList.add("required-popup");
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

togglePopup(usernameInput, usernameLabel);
togglePopup(emailInput, emailLabel);
togglePopup(senhaInput, senhaLabel);

//Validação do username

usernameInput.addEventListener('change', (e) => {
    let valor = e.target.value;
    console.log(valor);

    if (valor.length < 2 || /[\d!@#$%^&*(),.?":{}|<>]/.test(valor)) {
        // Verifica se o valor tem menos de 2 caracteres ou contém pelo menos um número
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'Nome inválido. Digite um nome válido.';
        usernameHelper.classList.add('visible');
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('correct');
        // Remova a classe 'visible' independentemente do estado anterior
        usernameHelper.classList.remove('visible');
    }
});

// Validação  do email
emailInput.addEventListener('change', (e) => {
    let valor = e.target.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        // Verifica se o valor não corresponde ao formato de e-mail padrão
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'E-mail inválido. Digite um e-mail válido.';
        emailHelper.classList.add('visible');
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');
        emailHelper.classList.remove('visible');
    }
});

// Validação da Senha

senhaInput.addEventListener('change', (e) => {
    let valor = e.target.value;

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d@$!%*?&]{8,}$/.test(valor)) {
        senhaInput.classList.remove('correct');
        senhaInput.classList.add('error');
        senhaHelper.innerText = 'Senha inválida. Deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial.';
        senhaHelper.classList.add('visible');
    } else {
        senhaHelper.classList.remove('visible');
        senhaInput.classList.remove('error');
        senhaInput.classList.add('correct');
    }
});
