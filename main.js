let container = document.querySelector("#pokemon-container");
let pokemonArray = [];

async function getPokemonsResultArray() {
  let results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  let arr = await results.json();
  return Promise.all(
    arr.results.map((pokemonData) =>
      fetch(pokemonData.url).then((response) => response.json())
    )
  );
}

async function fetchPokemon(url) {
  let pokemonData = await fetch(url);
  return pokemonData;
}
let pokemons = (async function () {
  return await getPokemonsResultArray().then((data) => {
    data.forEach((pokemon) => {
      console.log(pokemon);
      const div = document.createElement("div");
      div.style.marginRight = "12px";
      const ul = document.createElement("ul");
      ul.style.paddingLeft = "0";
      ul.style.listStyle = "none";
      const idAndNameElement = document.createElement("li");
      const weight = document.createElement("li");
      weight.innerText = `Poids: ${pokemon.weight / 10} kg(s)`;
      idAndNameElement.innerHTML = `N°${pokemon.id
        .toString()
        .padStart(
          3,
          "0"
        )}: ${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`;
      ul.append(idAndNameElement);
      ul.append(weight);
      div.style.display = "inline-block";
      const img = document.createElement("img");
         //   --------------------------------
        //  img.addEventListener('click', openModal);

        //  function openModal() {

        //     idAndNameElement.innerHTML = `${pokemon.id}, ${pokemon.name}, ${pokemon.weight}`
        //  }
         // ---------------------------------------
      img.src = pokemon.sprites.other["official-artwork"].front_default;
      img.style.maxWidth = "10vw";
      div.append(img);
      div.append(ul);
      container.append(div);
    });
  });
})();