function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.display.focus();
      this.cliqueBotoes();
      this.digitaTecla();
    },

    apagaUltimo() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Inválida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta Inválida");
      }
    },

    cliqueBotoes() {
      document.addEventListener(
        "click",
        function(e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.apaga();
          }

          if (el.classList.contains("btn-del")) {
            this.apagaUltimo();
          }

          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
            this.display.focus();
          }
        }.bind(this)
      );
    },

    digitaTecla() {
      document.addEventListener(
        "keyup",
        function(e) {
          if (e.keyCode === 8) {
            this.apagaUltimo();
          }
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    apaga() {
      this.display.value = "";
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
