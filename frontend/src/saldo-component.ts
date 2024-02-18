let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLSpanElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLTimeElement;

if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

if (elementoDataAcesso) {
    elementoDataAcesso.textContent = new Date().toLocaleString('pt-br', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}