//1. Capturar el evento 'click' en el boton
document.querySelector('#btn').addEventListener('click', function () {
 console.log('you made click!');   
 console.log(document.querySelector("#str").value)
 /**solucion de oscar:
   const word = document.querySelector("#str").value;
  console.log("valor: ", word);
  */
  let wordResult = word.length;
  document.querySelector("#output").textContent = 'El número de carácteres es ' + wordResult; /**(Solucion de Oscar, buscar otra solucion) */
})

//2. Recuperar el valor que el usuario ha introducido en el input y mostrarlo por consola

//3. Poner el numero de caracteres en el div#output