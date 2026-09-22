const grimoire = {
  owner: "Mago Merlín",
  spells: ["Bola de Fuego", "Escudo de Hielo"],
};

// Lo permite porque el .push modifican el contenido en memoria al que se apunta, pero la dirección almacenada en la
// constante permanece idéntica.
grimoire.spells.push("Rayo Arcano");

// Este si
// grimoire.owner = "Mago Oscuro";

// Este es constante y no puedes modificar
grimoire = { owner: "Mago Oscuro" };

console.log(grimoire);
