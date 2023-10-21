/*
  Sãos os id do arquivo "index.html"
    1 - cardContainer
    2 - filterButton
*/

// Array de objetos com informações de pessoas aleatorias 

const peopleData = [
  {
    nome: "Joao Silva",
    idade: 25,
    cidade: "São Paulo"
  },
  {
    nome: "Mariana",
    idade: 36,
    cidade: "Paraíba"
  },
  {
    nome: "Rafaella",
    idade: 16,
    cidade: "Maranhão"
  },
  {
    nome: "Thiago",
    idade: 22,
    cidade: "Rio de Janeiro"
  },
  {
    nome: "Matheus",
    idade: 19,
    cidade: "Pernambuco"
  },
  {
    nome: "Silva",
    idade: 40,
    cidade: "Paraíba"
  },
  {
    nome: "Mariana",
    idade: 36,
    cidade: "Paraíba"
  },
  {
    nome: "Rafaella",
    idade: 16,
    cidade: "Maranhão"
  },
  {
    nome: "Thiago",
    idade: 22,
    cidade: "Rio de Janeiro"
  },
  {
    nome: "Matheus",
    idade: 19,
    cidade: "Pernambuco"
  },
  {
    nome: "Silva",
    idade: 40,
    cidade: "Paraíba"
  },
  {
    nome: "Mariana",
    idade: 36,
    cidade: "Paraíba"
  },
  {
    nome: "Rafaella",
    idade: 16,
    cidade: "Maranhão"
  },
  {
    nome: "Thiago",
    idade: 22,
    cidade: "Rio de Janeiro"
  },
  {
    nome: "Matheus",
    idade: 19,
    cidade: "Pernambuco"
  },
  {
    nome: "Silva",
    idade: 40,
    cidade: "Paraíba"
  }
]
// console.table(peopleData);

// Pegando os Id do "html"
const cardContainer = document.getElementById("cardContainer")
//console.log(cardContainer);
const filterButton = document.getElementById("filterButton")
//console.log(filterButton);

// Função para criar e exibir os cards 
function createCards(people){ 
  cardContainer.innerHTML = ''; // Limpar o container antes de adicionar os cards 

  people.forEach( person => {

    // Criar uma div
    const card = document.createElement("div");
    card.className = "card";

    // Criar uma tag h2
    const nameElement = document.createElement("h2");
    nameElement.textContent = `Nome: ${person.nome}` 

    // Criar uma tag "p" para a idade
    const ageElement = document.createElement("p")
    ageElement.textContent = `Idade: ${person.idade}`

    // Criar uma tag "p" para a cidade
    const cityElement = document.createElement("p")
    cityElement.textContent = `Cidade: ${person.cidade}`

    // Adicionar os elementos criados dentro da div
    card.appendChild(nameElement)
    card.appendChild(ageElement)
    card.appendChild(cityElement)

    // Adicionar a div dentro do container
    cardContainer.appendChild(card)
  });
}

// Função para filtar pessoas com idade superior a 24 anos
function filterByAge(){ // arrow function
  const filteredPeople = peopleData.filter(person => person.idade == 36);
  createCards(filteredPeople)
}

// Chamar a funcao para cirar os cards quando a página é carregada
window.onload = createCards(peopleData)

// Adionar um evento de clique ao botão de filtro
filterButton.addEventListener("click", filterByAge)