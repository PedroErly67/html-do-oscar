var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const user = {
    "abu" : "1234",
    "uba" : "4321",
    "âi" : "1111"
}

let logar = document.querySelector('#id01 form')

logar.addEventListener('submit', function(event){
    let usu = loginForm.uname.value.trim()
    let sen = loginForm.psw.value

    if (userValidos.hasOwnProperty(usuario)&&user[usu]===sen){
        alert("deu pai")
        modal.style.display="none";
        loginForm.reset();
    } else {
        alert("deu erro")
    }
})