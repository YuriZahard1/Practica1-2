const prepararCafe = (tamano, ...ingredientes) => {
  return `Café ${tamano} con los siguientes
extras: ${ingredientes}`;
};

console.log(prepararCafe("Mediano", "Leche de Avena", " Vainilla", " Canela"));
