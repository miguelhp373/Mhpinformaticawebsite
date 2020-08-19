var logado = false

if(localStorage.getItem("acesso") == "true"){
    logado = true
}

if(logado != true){
    alert("Usuário Não Permitido!")
    alert("Saindo....")
    window.location.href="login.html"
}
function sair(){
    window.location.href="login.html"
    localStorage.clear()
}