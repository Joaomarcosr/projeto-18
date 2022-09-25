// dados do formulário 

const btnSubmitDados = document.getElementById('btnEnviarDados'); 

btnSubmitDados.addEventListener('click', function(e) {
    e.preventDefault(); 
    // dados de usuario
    let dadosCadastrados = {
        nomeComplete: document.getElementById('nameComplete').value, 
        emailUser: document.getElementById('emailUser').value, 
        telefoneUser: document.getElementById('telUser').value, 
        idadeUser: document.getElementById('idadeUser').value
    }

    const {
        nomeComplete: nome, 
        emailUser: email, 
        telefoneUser: telefone, 
        idadeUser: idade    
    } = dadosCadastrados; 

    if (nome === '' || telefone === '' || email === '' || idade === '') {
        window.alert('Digite os dados para prosseguir.')
    } else {
    // local de armezenar os dados

    let localDados = document.getElementById('resText'); 

    localDados.innerHTML = `
        Nome: ${nome} </br>
        Email: ${email} </br>
        Telefone: ${telefone} </br>
        Idade: ${idade} anos. </br>
    `; 

    let msgSucesso = document.getElementById('msgSucesso').style.display = 'block'; 

    let conteinerForm = document.getElementById('formDados');
    conteinerForm.style.display = 'none';
    }    
}); 


const msgSucesso = document.getElementById('msgSucesso'); 

msgSucesso.addEventListener('click', function() {
    // conteiner form input
    let conteinerForm = document.getElementById('formDados');
    conteinerForm.style.display = 'none'; 

    // mensagem sucesso 
    msgSucesso.style.display = 'none'; 

    // local de dados cadastrados
    let localCadastro = document.getElementById('progress'); 
    localCadastro.style.display = 'block';
})


/* Editar */

const btnEditar = document.getElementById('btnEditar'); 

btnEditar.addEventListener('click', function() {
    let conteinerForm = document.getElementById('formDados');
    conteinerForm.style.display = 'block';
    
    // mensagem sucesso 
    msgSucesso.style.display = 'none'; 

    // local de dados cadastrados
    let localCadastro = document.getElementById('progress'); 
    localCadastro.style.display = 'none';
}); 