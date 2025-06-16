let botao = document.getElementById("botao");
botao.style.backgroundColor = "green";
document.addEventListener("DOMContentLoaded", function() {
            let botao = document.getElementById("botao");
            let mensagemDiv = document.getElementById("mensagem");

            botao.addEventListener("click", function() {
                mensagemDiv.textContent = "As grandes coisas surgem de pequenos começos.";
            });
        });
