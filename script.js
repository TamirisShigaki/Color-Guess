window.onload = function () {
  //! Requisito 3

  function geraCor() {
    let cores = document.querySelector('#lista-cores');
    for (let i = 1; i <= 6; i += 1) {
      let cor = document.createElement('li');
      cor.classList.add('ball');
      cor.style.backgroundColor = geraNum(1, 256);
      cores.appendChild(cor);
    }
  }

  geraCor();

  //! Requisito 4

  //* Referencia para a function 'geraNumero' (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

  function geraNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return `rgb(${Math.floor(Math.random() * (max - min)) + min},${
      Math.floor(Math.random() * (max - min)) + min
    },${Math.floor(Math.random() * (max - min)) + min})`;
  }

  //! Requisito 6
  //O método Location.reload() recarrega a URL atual. Seu unico parâmetro opcional é um Boolean (en-US), que, quando true, faz com que a página sempre seja recarregada do servidor. Se ele é false ou não estiver especificado, o navegador pode carregar ela do cache.

  let tentarNovamente = document.querySelector('#reset-game');

  tentarNovamente.addEventListener('click', reset);
  function reset() {
    location.reload();
  }

  //! Requisito 2, 5 e 7 - com ajuda do Kleverson Eller 19-C

  function geraNum2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let colorAleatoria = geraNum2(1, 7) - 1;
  let rgb = document.querySelector('#rgb-color');
  function corAleatoria() {
    let listaCores = [];
    let cores = document.querySelectorAll('.ball');

    for (let i of cores) {
      let cor = i.style.backgroundColor;
      listaCores.push(cor);
    }
    rgb.innerHTML = listaCores[colorAleatoria];
  }

  corAleatoria();

  if (localStorage.getItem('pontuacao') == null) {
    localStorage.setItem('pontuacao', 0);
  }
  let salvarPlacar = localStorage.getItem('pontuacao');
  console.log(parseInt(salvarPlacar));

  let escolherCor = document.querySelector('#lista-cores');
  let placar = document.querySelector('#score');
  placar.innerHTML = salvarPlacar;
  escolherCor.addEventListener('click', pontuacaoPlacar);
  function pontuacaoPlacar(evento) {
    if (evento.target.classList.value == 'ball') {
      if (evento.target.style.backgroundColor === rgb.innerHTML) {
        document.querySelector('#answer').innerHTML = 'Acertou!';
        placar.innerHTML = parseInt(salvarPlacar) + 3;
      } else {
        document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
      }
    }
    localStorage.setItem(
      'pontuacao',
      document.querySelector('#score').innerHTML
    );
  }
};
