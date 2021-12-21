//Requisito 4
/* 256, pq as cores vao de 0 a 255, mas como quero incluir a cor 255 precisa ser ate o 256 para a função  Math.random() dar certo
A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. 
A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
  */

let balls = document.querySelectorAll('.ball');

for (let index of balls) {
  index.style.backgroundColor = geraCor();
}
function geraCor() {
  let cores = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  return 'rgb(' + cores + ')';
}
