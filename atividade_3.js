function parOuImpar(numero) {
  return new Promise((resolve, reject) => {
    numero % 2 === 0 ? resolve("O número é par") : reject("O número é impar");
  });
}

function teste() {
  const num = 13;

  parOuImpar(num)
    .then((valor) => console.log(valor))
    .catch((err) => console.log(err))
    .finally(() => console.log("Número passado como parametro:", num));
}

teste();
