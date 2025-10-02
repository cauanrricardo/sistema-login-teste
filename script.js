function login(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("msg");

    if ((usuario === "estagiario" && senha === "Sm4ll") ||
        (usuario === "admin" && senha === "bigboss@")) {
        msg.style.color = "green";
        msg.innerText = "Login realizado com sucesso!";
    } else {
        msg.style.color = "red";
        msg.innerText = "Acesso negado!";
    }
}
