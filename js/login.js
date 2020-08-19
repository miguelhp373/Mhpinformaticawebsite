function logar(){
    var user = document.getElementById("nomelog")
    var pass = document.getElementById("senhalog")
    var userteste = String(user.value)
    var passteste = String(pass.value)
      if(userteste == "miguel@admin" && passteste == "212807"){ //verifica se usuario e senha digitados nos inputs estão corretos
          localStorage.setItem("acesso", true) //ele armazena o cache do navegador para ter autorização para logar
          window.alert("Login Feito Com Sucesso!")
          window.location.href = "tabelaos.html" //redireciona para as tabelas
      }else{
        alert("Usuário ou Senha Inválidos")//mensagem caso o usuario e senha estejam errados
      }
    }
