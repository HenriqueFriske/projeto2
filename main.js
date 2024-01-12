const form = document.getElementById('add_coisas');
const nome = [];
const telefone = [];
const obs = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('fone-contato');
    const inputObs = document.getElementById('obs');

    nome.push(inputNome.value);
    telefone.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;  
    linha += `<td>${inputTelefone.value}</td>`; 
    linha += `<td>${inputObs.value}</td>`; 
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
    inputObs.value = '';

    atualizaQuantidadeContatos(); 

    setTimeout(() => {
        inputNome.focus();
    }, 0);
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}

function atualizaTotal(){
    const total = atualizaQuantidadeContatos();
    document.getElementById('totalNumeros').innerHTML = total;
}

function atualizaQuantidadeContatos(){
    quantidadeDeContatos = nome.length;
    return quantidadeDeContatos;
}

