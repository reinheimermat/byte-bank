import './css/style.css';

let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLSpanElement;
elementoSaldo.textContent = saldo.toString();

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert('Erro no formulário');
    }

    const inputTipoTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === "Depósito") {
        saldo += valor;
    } else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Transação inválida!")
        return
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    elementoFormulario.reset();
});