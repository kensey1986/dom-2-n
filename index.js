//  let modificandoPrimerParrafo = document.getElementById("parrafo1");
//  console.log('====================================');
//  console.log(modificandoPrimerParrafo.innerHTML);
//  console.log('====================================');
//  modificandoPrimerParrafo.innerHTML = "<script>alert('Soy Juan con una alerta molesta!')</script>"
//  console.log('====================================');
//  console.log(modificandoPrimerParrafo.innerHTML);
//  console.log('====================================');


 let traeArraydeNodosTexto = document.getElementsByName("texto");

 console.log('====================================');
 console.log(traeArraydeNodosTexto);
 console.log('====================================');
//  const capturarInnerHTML= traeArraydeNodosTexto[1].innerHTML;
//  console.log('====================================');
//  console.log(capturarInnerHTML);
//  console.log('====================================');
//  const capturarTextContent = traeArraydeNodosTexto[1].textContent;
//  console.log('====================================');
//  console.log(capturarTextContent);
//  console.log('====================================');

// traeArraydeNodosTexto[1].innerHTML ='modifique mi primer <strong>parrafo </strong><span>en la posicion [1]</span> utilizando innerHTML'

traeArraydeNodosTexto[1].textContent ='modifique mi primer <strong>parrafo </strong><span>en la posicion [1]</span> utilizando textContent'

// console.log('====================================');
// console.log(modificandoPrimerParrafo.innerHTML);
// console.log('====================================');


//  let modificandoPrimerParrafo = document.getElementById("parrafo1");

//  console.log('====================================');
//  console.log(modificandoPrimerParrafo.textContent);
//  console.log('====================================');

//  modificandoPrimerParrafo.textContent = ' modifique mi primer  <strong>parrafo </strong>'

//  console.log('====================================');
//  console.log(modificandoPrimerParrafo.innerHTML);
//  console.log('====================================');