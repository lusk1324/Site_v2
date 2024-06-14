var banners = ["/img/img/livros.jpg", "/img/img/livros2.jpg"];
var bannersAtual = 0;
var emExecucao = true; // Variável para controlar o estado do slideshow

function trocaBanner() {
    bannersAtual = (bannersAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannersAtual];
}

var timer = setInterval(function() {
    if (emExecucao) {
        trocaBanner();
    }
}, 5000); // Intervalo ajustado para 5000 milissegundos (5 segundos)

var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (emExecucao) {
        clearInterval(timer);
        emExecucao = false;
        controle.textContent = 'Play'; // Altera o texto do botão para 'Play'
    } else {
        timer = setInterval(trocaBanner, 5000);
        emExecucao = true;
        controle.textContent = 'Pause'; // Altera o texto do botão para 'Pause'
    }
};
