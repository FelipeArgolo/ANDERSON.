function adicionarCliente() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    
    
    if (nome === '' || telefone === '' || email === '') {
        alert('Preencha todos os campos!');
        return;
    }

    
    let tabela = document.getElementById('listaClientes');
    let novaLinha = tabela.insertRow();
    
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = telefone;
    novaLinha.insertCell(2).innerText = email;

    let acaoCell = novaLinha.insertCell(3);
    let botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Excluir';
    botaoExcluir.classList.add('btn-excluir');
    botaoExcluir.onclick = function () {
        // Confirmar exclusão
        if (confirm('Você tem certeza que deseja excluir este cliente?')) {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        }
    };
    
    acaoCell.appendChild(botaoExcluir);

    // Limpar campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
}

// Função para validar o campo telefone
function validarTelefone(event) {
    let valor = event.target.value;
    
   
    let apenasNumeros = valor.replace(/\D/g, '');
    
    
    event.target.value = apenasNumeros;

}
