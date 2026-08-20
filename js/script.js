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
    event.preventDefault();

    let usu = logar.uname.value.trim()
    let sen = logar.psw.value

    if (user.hasOwnProperty(usu)&&user[usu]===sen){
        alert("deu pai")
        modal.style.display="none";
        logar.reset();
    } else {
        alert("deu erro")
    }
})