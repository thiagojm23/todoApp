const novoTodo = document.querySelector(".cabecalho__novo-todo input");
novoTodo.addEventListener("keydown", (evento) => {
  if (evento.keyCode === 13) {
    const listaNode = document.querySelectorAll(".todos__lista p");
    const lista = Array.from(listaNode).slice(0, -1);
    console.log(lista);
    for (const elemento of lista) {
      console.log(elemento.classList.contains("ultimo"));
      if (elemento.outerText === "") {
        console.log("indo");
        elemento.insertAdjacentHTML("beforeend", novoTodo.value);
        novoTodo.value = "";
        break;
      } else if (elemento.classList.contains("ultimo")) {
        console.log("batata doce");
        const divLinha = document.createElement("div");
        divLinha.innerHTML = `<p>
        <button><img /></button>
        </p>`;
        const paiLista = document.querySelector(".todos__lista div");
        paiLista.appendChild(divLinha);
        novoTodo.value = "";
      }
    }
    const checks = document.querySelectorAll(".todos__lista p button");
    const imagemCheck = document.querySelectorAll(".todos__lista p button img");
    checks.forEach((botao, index) => {
      const copy = botao;
      if (botao != false && botao != true) {
        botao.addEventListener("click", () => {
          if (botao === false) {
            botao = copy;
            botao.classList.remove("ativado");
            botao.removeAttribute("style");
            imagemCheck[index].src = "";
            botao = true;
          } else {
            botao = copy;
            botao.classList.add("ativado");
            imagemCheck[index].src = "images/icon-check.svg";
            botao = false;
          }
        });
      }
    });
  }
});
/*utilizar o for of para percorrer o array lista e fazer com que ele adicione
o valor do input no campo abaixo que está vazio, no caso adicionar nos <p>*/
