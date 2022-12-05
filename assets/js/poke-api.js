const pokeApi = {};
function convertePokeApiDetailToPokemon(pokemonDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokemonDetail.id;
  pokemon.name = pokemonDetail.name;
  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types; //types(0)
  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;
  return pokemon;
}
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((res) => res.json())
    .then(convertePokeApiDetailToPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailsRequest) => Promise.all(detailsRequest))
    .then((pokemonDetails) => pokemonDetails);
};

// function convertPokerApiDetailPokemon(pokerDetail) {
//   const pokemon = new Pokemon();
//   pokemon.number = pokerDetail.id;
//   pokemon.name = pokerDetail.name;
//   const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
//   const [type] = types
//   pokemon.types = types
//   pokemon.type = type
//   pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
//   return pokemon
// }

// pokeApi.getPokemonDetail = (pokemon) => {
//   return fetch(pokemon.url)
//     .then((response) => response.json())
//     .then(convertPokeApiDetailToPokemon)
// }
