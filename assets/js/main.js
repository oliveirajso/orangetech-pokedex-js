const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
function convertPokemonTypesToList(pokemonType) {
  return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class ="number">#${pokemon.number}</span>
    <span class ="name">${pokemon.name}</span>
    <div class="detail">
     <ol class="types">
        ${convertPokemonTypesToList(pokemon.types).join('')}
      </ol>
    <img src="${pokemon.sprites.other.dream_world.front_default}" alt ="${pokemon.name}">
    </div>
  </li>
    `;
}
// ${pokemon.photo}
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons;
}
const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToList).join('');
});

