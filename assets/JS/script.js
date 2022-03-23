

// console.log('O seu e-mail é:', email);
// console.log(`O seu e-mail é: ${email}`);


document.getElementById('submit').addEventListener('click', e => {
    console.log('O botão foi clicado!')
});

document.getElementById('form_login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário')
});

document.querySelector('#form_login').addEventListener('mouseleave', e=>{
    console.log("O mouse está fora!")
});

document.querySelector('#form_login').addEventListener('submit', e=>{
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(`email: ${email}   senha: ${password}`);

let json = {
    email,
    password
};

console.log(json);

let stringJSON = JSON.stringify(json);

console.log(stringJSON);

let jsonParse = JSON.parse(stringJSON);

console.log(jsonParse.password);

if (!json.email) {
    console.error("O campo deve ser preenchido");
} else if (!json.password) {
    console.error("O campo senha deve ser preenchido")
} else {
    console.info("Dados validados!")
}

});