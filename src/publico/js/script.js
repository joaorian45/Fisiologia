function trocarImagem(numeroImagem) {
  var imagens = document.querySelectorAll(".imagem-sobreposta");

  // Esconde todas as imagens sobrepostas
  for (var i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }

  // Exibe a próxima imagem ou volta p imagem 1 se ja passaram tds
  var proximaImagem = document.getElementById("imagem" + numeroImagem);
  if (proximaImagem) {
    proximaImagem.style.display = "inline";
    atualizarTextos(numeroImagem); // Atualiza os textos de acordo com a imagem que aparece
    atualizarIdsParagrafos(numeroImagem); // Atualiza os IDs dos parágrafos para o mesmo da imagem
  }
}

// Função para atualizar os id dos parágrafos
function atualizarIdsParagrafos(numeroImagem) {
  var ladoEsquerdo = document.getElementById("textoEsquerdoImagem");
  var ladoDireito = document.getElementById("textoDireitoImagem");
  
  // Atualiza os id dos parágrafos com base no número da imagem
  ladoEsquerdo.id = "textoEsquerdoImagem" + numeroImagem;
  ladoDireito.id = "textoDireitoImagem" + numeroImagem;
}


function trocarConteiner(numeroImagem) {
  // esconde todas as imagens anteriores
  var imagens = document.querySelectorAll(".imagem");
  for (var i = 1; i < numeroImagem; i++) { // Começa em 1 para ignorar a imagem clicada
    var imagem = document.getElementById("imagem" + i);
    imagem.style.display = "none";
  }

  // Exibe apenas a imagem clicada como contêiner
  var imagemClicada = document.getElementById("imagem" + numeroImagem);
  imagemClicada.style.display = "inline";
  atualizarTextos(numeroImagem); // Atualiza os textos com base na imagem selecionada
}

function reiniciarCiclo() {
  // oculta todas as imagens menos a primeira
  var imagens = document.querySelectorAll(".imagem");
  for (var i = 1; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  // retorn e exibe apenas a primeira imagem
  var primeiraImagem = document.getElementById("imagem1");
  primeiraImagem.style.display = "inline";
  atualizarTextos(1); // Reseta os textos para a imagem 1
}

function atualizarTextos(numeroImagem) {
  // textos para as imagems, separados em direita e esquerda, na sequencia correta, é possivel fazer alteraç~eos em palavras especificas diretamente no texto
  var textosEsquerda = ["Ana <span> cortava legumes </span> em sua cozinha, <span style='color: red;'>quando derrepente...</span>.", "Ana <span> cortava legumes </span> em sua cozinha, e cortou seu dedo", "Houve o rompimento do endotélio", "As hemácias estão saindo... ", "", "", "", "", ""];
  var textosDireita = ["Clique na Imagem... ->", "E agora?", "Ana notou que sangrou por um breve período e depois cessou o sangue. Vamos entender como isto funciona?", "Para impedir o colágeno vai induzir as integrinas a ativar as Plaquetas. As plaquetas vão liberar a serotonina, a ADP e o FAP (fator de ativação plaquetária) e eles vão formar uma alça que vai chamar mais plaquetas pra se unirem as que foram ativadas.", "As plaquetas unidas vão formar um tampão plaquetário aderido onde rompeu o endotélio, para poder fechar temporariamente essa ferida, até o coagulo se formar.", "Para formar o coágulo são utilizadas duas vias que se convertem em uma no final", "O colágeno exposto vai ativar / chamar a primeira enzima na via intrínseca, o Fator XII (que dá inicío ao processo da cascata). Na via extrínseca, o tecido que tá danificado vai liberar / expor o fator tecidual, que é o Fator III e ele vai ativar / chamar o Fator VII, iniciando a via extrínseca. ", "As duas vias vão se unir na via comum e vão produzir a trombina, que vai pegar o fibrinogênio e transformar / quebrar ele em fibrina (polímeros inssolúveis de fibrina).", "Essas fibrinas vão se entrelaçar no tampão de plaquetas e vão prender os eritrocitos em sua rede"];
  
  // Atualiza os textos com base no número da imagem
  document.querySelector('.lado-esquerdo p').innerHTML = textosEsquerda[numeroImagem - 1];
  document.querySelector('.lado-direito p').textContent = textosDireita[numeroImagem - 1];
  
  // Atualiza os IDs dos parágrafos
  document.querySelector('.lado-esquerdo p').id = "textoEsquerdoImagem" + numeroImagem;
  document.querySelector('.lado-direito p').id = "textoDireitoImagem" + numeroImagem;
}
