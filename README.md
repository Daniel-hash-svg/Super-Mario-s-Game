# Super-Mario-s-Game

Link do jogo pelo Vercel: https://super-mario-alpha.vercel.app/

Observação: ainda falta tornar este projeto responsivo e adaptado para celulares.

Foi um projeto divertido de fazer, Mario sempre é muito divertido. Nesse projeto eu pude melhorar os conhecimentos em Javascript puro, HTML e CSS.
Pude fazer uso dos keyframes e animações no CSS.
 
 Para pular com o Mário, basta apertar qualquer tecla.

Uma observação importante sobre o áudio do jogo: Eu fiz um post no linkedin com um vídeo jogando o jogo. Nesse vídeo, eu deixei a maravilhosa música do Mario tocando. Mas aqui no código eu tirei. Eu fiz isso porque, ao usar a tag <audio> e os atributos autoplay e loop, não tocava a música em nenhum dos meus navegadores. Usar o autoplay é ótimo pra começar o jogo e a música já estar tocando.
Então eu usei o atributo controls. Dessa forma, a música toca, mas precisa dar um start no botão de música pra começar. O detalhe é que o jogo roda enquanto você precisa dar esse start, e aí isso facilita que o jogador perca o jogo, o que atrapalha a experiência. Então no meu vídeo eu gravei com a música, mas tirei o atributo controls no meu código que subi pro github. Porém, eu ainda deixei os atributos autoplay e loop. Depende do navegador, então outras pessoas que eventualmente queiram jogar poder iniciar o jogo com a música já tocando.

Link do post no Linkedin:  https://www.linkedin.com/posts/daniel-ceci_v%C3%ADdeo-de-um-projeto-particularmente-divertido-activity-6948019020272951296-BQUV?utm_source=linkedin_share&utm_medium=member_desktop_web

Coisas que ainda podem melhorar no jogo:
- Adaptar pra mobile. Por enquanto ainda não tem como jogar esse jogo no celular.
- Colocar telas de Game over quando o jogador perde.
- Colocar um som para os pulos do Mario.
