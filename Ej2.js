const calcularEscudo = (nivel) => nivel * 15;
// (Usa sintaxis concisa de un solo parámetro sin paréntesis y retorno implícito).
const impactoCritico = (danoBase, multiplicador) => danoBase * multiplicador;
// (Usa retorno implícito de dos parámetros).
const mensajeAlerta = () => "¡Alerta: Intrusos en la cubierta!";
// (Usa arrow function sin parámetros).
console.log(calcularEscudo(10));
console.log(impactoCritico(10, 10));
console.log(mensajeAlerta());
