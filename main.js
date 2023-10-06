const teste = document.querySelectorAll(".todos__lista p button");

teste.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.classList.contains("ativado")) {
      botao.classList.remove("ativado");
    } else {
      botao.classList.add("ativado");
    }
  });
});
