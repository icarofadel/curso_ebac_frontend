const form = document.getElementById('form-valor');
const numA = document.getElementById('campo-a');
const numB = document.getElementById('campo-b');

function validaNum(numA, numB) {
    return numB > numA
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `O número <b>${numB.value}</b> é maior que o <b>${numA.value}</b>`

    if (validaNum(numA.value, numB.value)) { 
    
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    numA.value = '';
    numB.value = '';

    } else {
        numA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNum(e.target.value);

    if (!validaNum(numA.value, numB.value)) {
        numB.classList.add('.error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numB.style.remove = '.error';
        document.querySelector('.error-message').style.display = 'none';
    }
})

console.log(form);