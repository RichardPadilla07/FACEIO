const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e795958aacmsh88bfc10d6223c70p1b3257jsn39b0d84761d1',
		'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
	}
};

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let pizzas = [];

async function fetchPizzas() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    pizzas = result;
    renderCards(getRandomItems(pizzas, 10)); // mostrar 10 aleatorias al cargar
  } catch (error) {
    console.error('Error al obtener pizzas:', error);
  }
}

function getRandomItems(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderCards(data) {
  cardContainer.innerHTML = ''; // limpiar

  data.forEach(pizza => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${pizza.img}" alt="${pizza.name}">
      <p>Nombre: ${pizza.name}</p>
      <p class="price">Precio: $${pizza.price}</p>
      <p>${pizza.description}</p>
    `;
    cardContainer.appendChild(card);
  });
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderCards(getRandomItems(pizzas, 10));
  } else {
    const filtered = pizzas.filter(pizza =>
      pizza.description.toLowerCase().includes(query)
    ).slice(0, 10);

    renderCards(filtered);
  }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// Inicializar
fetchPizzas();
