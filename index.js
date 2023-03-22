const similarJobs = document.querySelectorAll(".similarJob-0-2-766"); //nodeList
//console.log("similarJobs:", similarJobs);
const arrJobs = Array.from(similarJobs); //toArray
//console.log("arrJobs:", arrJobs);

let arrObjs = arrJobs
  .map((el) => {
    anchorElement = el.querySelector("a");
    title = anchorElement.innerText;
    titleSplit = title.split(" ");

    return {
      pais: titleSplit[titleSplit.length - 1],
      salario: el.children[1].innerText,
      aviso: anchorElement.innerText,
    };

  })
  .filter((e) => {
    return (
      e.pais.includes("PERU") ||
      e.pais.includes("CHILE") ||
      e.pais.includes("MEXICO")
    );
  });

console.log(arrObjs);

console.log(contarAvisosPorPaisYSalario(arrObjs));

function contarAvisosPorPaisYSalario(avisos) {
  const result = [];

  avisos.forEach((aviso) => {
    const { pais, salario, aviso: avisoTexto } = aviso;
    const existingItem = result.find(
      (item) => item.pais === pais && item.salario === salario
    );

    if (existingItem) {
      existingItem.cantidad++;
      existingItem.aviso.push(avisoTexto);
    } else {
      result.push({
        pais,
        salario,
        cantidad: 1,
        aviso: [avisoTexto],
      });
    }
  });

  return result;
}
