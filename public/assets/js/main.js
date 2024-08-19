// script.js

// Função para consultas programadas à BrasilAPI
async function consultaBrasilAPI(endpoint, elemento) {
    try {
        const resposta = await fetch(`https://brasilapi.com.br/api/${endpoint}`);
        if (!resposta.ok) {
            throw new Error('Erro na consulta à BrasilAPI');
        }
        const dados = await resposta.json();
        const preElement = document.createElement('pre');
        preElement.textContent = JSON.stringify(dados, null, 2);
        document.getElementById(elemento).appendChild(preElement);
    } catch (erro) {
        console.error(erro);
        const preElement = document.createElement('pre');
        preElement.textContent = 'Nenhum registro foi encontrado.';
        document.getElementById(elemento).appendChild(preElement);
    }
}

// Chamadas programadas (mantém a tag <pre> sempre visível)
consultaBrasilAPI('cep/v1/01001000', 'consulta1');
consultaBrasilAPI('feriados/v1/2024', 'consulta2');

// Consulta DDD via formulário (tag <pre> só aparece após a consulta)
document.getElementById('consulta-formulario').addEventListener('submit', async function(e) {
    e.preventDefault();
    const ddd = document.getElementById('ddd').value;
    const resultadoDddContainer = document.getElementById('resultado-ddd');
    resultadoDddContainer.innerHTML = ''; // Limpar conteúdo anterior
    try {
        const resposta = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        if (!resposta.ok) {
            throw new Error('Erro na consulta ao DDD');
        }
        const dados = await resposta.json();
        const preElement = document.createElement('pre');
        preElement.textContent = JSON.stringify(dados, null, 2);
        resultadoDddContainer.appendChild(preElement);
    } catch (erro) {
        console.error(erro);
        const preElement = document.createElement('pre');
        preElement.textContent = 'Nenhum registro foi encontrado.';
        resultadoDddContainer.appendChild(preElement);
    }
});

// Consulta Informações de CNPJ
document.getElementById('cnpj-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const cnpj = document.getElementById('cnpj-input').value;
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
        const data = await response.json();
        document.getElementById('resultado-cnpj').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        document.getElementById('resultado-cnpj').style.display = 'block';
    } catch (error) {
        console.error('Erro na consulta por CNPJ:', error);
        document.getElementById('resultado-cnpj').innerHTML = '<pre>Nenhum registro foi encontrado.</pre>';
    }
});

// Promise.race e Promise.all (tag <pre> só aparece após a consulta)
document.getElementById('btn-race').addEventListener('click', function() {
    const resultContainer = document.getElementById('resultado-race');
    resultContainer.innerHTML = ''; // Limpar conteúdo anterior
    Promise.race([
        fetch('https://swapi.dev/api/people/1/'),
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://api.agify.io?name=michael')
    ])
    .then(res => res.json())
    .then(data => {
        const preElement = document.createElement('pre');
        preElement.textContent = JSON.stringify(data, null, 2);
        resultContainer.appendChild(preElement);
    })
    .catch(err => {
        const preElement = document.createElement('pre');
        preElement.textContent = 'Nenhum registro foi encontrado.';
        resultContainer.appendChild(preElement);
    });
});

document.getElementById('btn-all').addEventListener('click', function() {
    const resultContainer = document.getElementById('resultado-all');
    resultContainer.innerHTML = ''; // Limpar conteúdo anterior
    Promise.all([
        fetch('https://swapi.dev/api/planets/1/'),
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://api.agify.io?name=sarah')
    ])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => {
        const preElement = document.createElement('pre');
        preElement.textContent = JSON.stringify(data, null, 2);
        resultContainer.appendChild(preElement);
    })
    .catch(err => {
        const preElement = document.createElement('pre');
        preElement.textContent = 'Nenhum registro foi encontrado.';
        resultContainer.appendChild(preElement);
    });
});

// Funções para limpar as respostas das consultas interativas
document.getElementById('limpar-resposta-ddd').addEventListener('click', function() {
    document.getElementById('resultado-ddd').innerHTML = '';
});

document.getElementById('limpar-resposta-cnpj').addEventListener('click', function() {
    document.getElementById('resultado-cnpj').innerHTML = '';
});

document.getElementById('limpar-race').addEventListener('click', function() {
    document.getElementById('resultado-race').innerHTML = '';
});

document.getElementById('limpar-all').addEventListener('click', function() {
    document.getElementById('resultado-all').innerHTML = '';
});

