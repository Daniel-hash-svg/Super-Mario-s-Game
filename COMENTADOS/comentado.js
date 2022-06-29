const mario = document.querySelector('.mario'); // pegando o gif do Mario que tem a class mario.
const pipe = document.querySelector('.pipe');

const jump = () => {
mario.classList.add('jump')
// pega o gif do mario, aí adiciona a class jump. Essa class vai ter a animation do pulo.

// IMPORTANTE:  Até essa parte do código, só pode pular o mario apenas uma vez. A classe jump é criada na 1° vez, e aí não dá pra criar de novo, A NÃO SER QUE EXCLUA ELA. 
// Por isso deve criar o settimeout. Essa função vai excluir a class jump logo depois que a animação for encerrada. Sendo assim, pode criar a class jump de novo.  Aí vai puder pular com o mario toda vez que apertar o botão.
setTimeout(() => {
    mario.classList.remove('jump');
}, 500); // o tempo de 500ms é pra que só remova a class no momento que a animação de pulo tenha sido concluída.
}

const loop = setInterval(() => { // em resumo, nesse loop vai checar a posição do pipe e do mario, aí vai analisar se deve parar o jogo ou continuar seguindo o loop.

const pipePosition  = pipe.offsetLeft; // offsetLeft vai me dar o número de pix do deslocamento esquerdo que a img do pipe está.
const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
// marioPosition é pra pegar qual a posição do mario "no ar".

// o quanto de px é quando o mario pula, preciso saber quanto é o deslocamento do chão. Porém, não existe um offsetBottom, então precisou de outra forma pra pegar esse valor. Aí usa esse window.getComputedStyle no mario. Aí consegue acessar a propriedade css bottom. Lembrando que no css foi definido que o mario fica com bottom:0. É na animation que ele pula e sai do 0.
// sem o replace  só vinha uma string com o px. Ex: '180px'. Usando Number e o replace, eu consigo um NUMBER sem o px.    Ex: 180.

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
   
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    // se o deslocamento pra esquerda do pipe for <= a 120, quer dizer que o pipe já chegou de encontro com a posição do mario. Aí vai parar a animação "pipe-animation".
    // Eu quero que,na hora que o pipe encostar no mario, a animação do pipe pare EXATAMENTE na posição que encostou no mario. Pra isso precisa fazer com que a propriedade "left" do pipe seja "X"px. No css eu não mexi no left do pipe, faz isso pelo JS mesmo. Por exemplo: Se o pipe encontrou com o mario na posição 120, eu defino aqui no javascript a propriedade "left" do pipe em 120px e isso faz com que o pipe pare nessa posição BABY.

    // com as duas linhas acima, a animation do pipe para sempre que chegar no 120px, mesmo se o mario tiver pulado e não tiver encostado no pipe.  Por isso usa a 3° condição do if.
    // se a posição do mario no ar for MENOR que 80px, é pq o pulo dele foi menor que o tamanho do pipe, então o mario ainda encosta no pipe.  Aí deve parar as animações.

    //  SOBRE A CONDIÇÃO DO MEIO => => =>  Pro jogo continuar, o deslocamento do pipe pra esquerda PRECISA SER NEGATIVO. Se o mario ficar parado, o pipe encosta nele no 120 pra esquerda. Se ele pular menos que 80, ele encosta no pipe pq não pulo alto suficiente. Se ele o mario pode pular mais alto que o pipe, mas o deslocamento do pipe pra esquerda for >0, o mario ainda vai cair em cima do pipe, porque o pipe vai continuar embaixo do mario. Por isso o pipe precisa ser negativo, aí ele até sai do quadrado que rola todo o jogo. Assim é garantido que o Mario passou do pipe, e ele não vai encostar no pipe na descida do pulo.
    // UM TESTE => => => veja no jogo que, quando o mario pula com sucesso, o pipe vai sumir do quadrado um pouquinho antes do mario descer 

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`; // quando parar o jogo e as animações, o mario fica parado no exato ponto que "encostou" no pipe. Sem isso, ele volta pra bottom:0 toda vez que para o jogo.

    mario.src = './Imagens/game-over.png'; // muda a imagem quando acaba o jogo.
    mario.style.width = '75px';
    mario.style.marginLeft = '50px'; // pra manter o mario bem pertinho do pipe quando acaba o jogo.Antes tava tendo um espaço muito grande. Fica mais bonito assim.

    clearInterval(loop); // se o jogo parar,limpa o intervalo. Quando acaba o jogo, não tem necessidade de ficar continuando com o loop.
}
}, 10) // 10 milisegundos

// o gif do mario fica no mesmo lugar, o que se move é o cano. Portanto, quando o cano encostar no mario, precisa acabar o jogo. Isso se dá na propriedade left: 120px.

document.addEventListener('keydown', jump); // quando apertar qualquer tecla, vai acionar a função jump. Essa função vai add a class jump no gif do mario.

