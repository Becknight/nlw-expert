const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para o lado do cliente.",
        "Um sistema operacional.",
        "Um banco de dados.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variável = myVar;",
        "variável myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos converte uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "convertToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função, para ser chamada posteriormente.",
        "Uma função que chama a si mesma.",
        "Uma função que retorna um valor booleano.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de selecionar um elemento HTML com o id 'myElement' em JavaScript?",
      respostas: [
        "document.getElementById('myElement')",
        "getElementById('myElement')",
        "#myElement",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Verificar igualdade de valor e tipo.",
        "Atribuir um valor a uma variável.",
        "Concatenar duas strings.",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama o processo de pegar o último elemento de um array em JavaScript?",
      respostas: [
        "Usando o índice -1.",
        "Utilizando o método 'lastElement'.",
        "Não é possível pegar o último elemento de um array.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma expressão regular em JavaScript?",
      respostas: [
        "Um padrão de pesquisa utilizado para encontrar padrões em strings.",
        "Um operador matemático.",
        "Uma função que retorna um valor booleano.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 3 + '3' em JavaScript?",
      respostas: [
        "'33'",
        "6",
        "TypeError",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map()' em JavaScript?",
      respostas: [
        "Iterar sobre todos os elementos de um array e aplicar uma função a cada um deles, retornando um novo array com os resultados.",
        "Concatenar dois arrays.",
        "Remover elementos duplicados de um array.",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
  
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta 
          corretas.delete(item)
          if(estaCorreta) {
          corretas.add(item)
             }
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      } 
      
      
      quizItem.querySelector('dl').appendChild(dt)
  
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }