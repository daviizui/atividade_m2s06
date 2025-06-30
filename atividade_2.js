function concluida3s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Concluído após 3 segundos");
    }, 3000);
  });
}

async function teste() {
  console.log("A");
  const msg = await concluida3s();
  console.log(msg);
  console.log("B");
}

teste();
