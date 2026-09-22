function desactivarBomba(codigo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (codigo === "1234") {
        resolve("¡Bomba desactivada con éxito! ");
      } else {
        reject("¡Código incorrecto! Boooom");
      }
    }, 2000);
  });
}
desactivarBomba("1234")
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));

desactivarBomba("9999")
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
