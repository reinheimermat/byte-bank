let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLSpanElement;

if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}