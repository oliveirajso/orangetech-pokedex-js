const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
function convertPokemonToList(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class ="number">#${pokemon.number}</span>
    <span class ="name">${pokemon.name}</span>
    <div class="detail">
     <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt ="${pokemon.name}">
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
  //const listItems = [];
  // for (let i = 0; i < pokemons.length; i++) {
  //   const pokemon = pokemons[i];
  //   listItems.push(convertPokemonToList(pokemon));
  // }

  // const newList = pokemons.map((pokemon) => {
  //   return convertPokemonToList(pokemon)
  // });
  //const newHtml = newList.join('');
  //pokemonList.innerHTML += newHtml;
  pokemonList.innerHTML += pokemons.map(convertPokemonToList).join('');
  

});
