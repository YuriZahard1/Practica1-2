const pokemonBase = { nombre: "Pikachu", tipo: "Eléctrico", nivel: 25 };
const ataques = ["Impactrueno", "Ataque Rápido"];
const pokemonMejorado = { ...pokemonBase, Shiny: true, nivel: 50 };
const listaAtaques = [...ataques, "Rayo"];
console.log(pokemonMejorado);
console.log(listaAtaques);
