const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

let offset = 0;
const limit = 10;
const maxRegistros = 151;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newhtml = pokemons.map(convertPokemonToList).join('')
    pokemonList.innerHTML += newhtml;
  });
}
//default 
loadPokemonItens(offset, limit);

function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class ="number">#${pokemon.number}</span>
    <span class ="name">${pokemon.name}</span>
    <div class="detail">
     <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
      </ol>
    <img src="${pokemon.photo}" alt ="${pokemon.name}">
    </div>
  </li>`;
}

/**
 * Evento para adicionar mais pokemons na lista
 */
loadMoreButton.addEventListener('click', () => {
  offset += limit;
  const qtdRegistrosProximaPagina = offset + limit;
  if (qtdRegistrosProximaPagina >= maxRegistros) {
    const novoLimite = maxRegistros - offset;
    loadPokemonItens(offset, novoLimite);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit)
  }
})


// pokeApi.getPokemons().then((pokemons = []) => {
//   pokemonList.innerHTML += pokemons.map(convertPokemonToList).join('');
// });