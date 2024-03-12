const arraySlides = [

    {
      titulo: "Ada lovelace",
      img: "img/ada.jpg",
      texto: "<p>Augusta Ada Byron King, conhecida como Ada Lovelace, marcou a história ao escrever o primeiro algoritmo para ser processado em uma máquina. A britânica nasceu em 10 de dezembro de 1815 e, diferente de muitas mulheres de seu tempo, recebeu uma educação rigorosa que incluía aulas de matemática, lógica e música. Influenciada pela mãe, a matemática Anne Isabella Noel Byron, que cuidava dos estudos da filha, Ada teve o interesse pela ciência despertado desde a infância.</p>"
    },
    {
       titulo: "Carol Shaw",
       img: "img/carol_shaw.jpg",
       texto: "<p>Estados Unidos, 1955. É a designer e programadora de videogames por trás do clássico jogo River Raid, publicado pela Activision em 1982 para o console de videogame Atari 2600, que hoje em dia é retrô. O jogo de Shaw, graças em parte à sua complexidade, aos recursos visuais e, é claro, à diversão, chegou a vender mais de 1 milhão de cartuchos. Os críticos o aclamaram como um dos melhores jogos para o Atari 2600.</p>"
    }, 

    {
       titulo: "Grace Murray",
       img: "img/grace_murry.jpg",
       texto: "Estados Unidos, 1906 - 1922 a analista de sistemas da Marinha dos Estados Unidos nas décadas de 40 e 50, e durante esse tempo desenvolveu a linguagem de programação Flow-Matic, que serviu como base para a criação do COBOL (Linguagem Comum Orientada para Negócios)usado até hoje em processamento de bancos de dados comerciais.</p>"
    }, 
                   
    {
      titulo: "Jean Sammet",
      img: "img/jean_sammet.jpg",
      texto: "Estados Unidos, 1928 - 2017 Em 1951, assumiu um cargo na Metropolitan Life Insurance Company como trainee de atuário. Ela concordou em participar de um programa de treinamento interno para aprender sobre máquinas de contabilidade de cartões perfurados.Depois de alguns anos, e muito estudo, foi para a IBM, e lá trabalhou por 27 anos para a IBM, onde desenvolveu o FORMAC, a primeira linguagem de computador amplamente utilizada para manipulação simbólica de fórmulas matemáticas. Ela foi também um dos membros \nda subcomissão que criou a linguagem COBOL"
    },
    {
      titulo: "Karen Sparck Jones",
      img: "img/karen_sparck.jpg",
      texto: "Inglaterra, 1935 - 2007 Trabalhou na pesquisa automática de linguagem e processamento de informações desde o final  dos anos 1950, e estabeleceu a base para os mecanismos de busca.Até hoje, pesquisadores ainda aplicam as fórmulas criadas por ela. O conceito, conhecido como “freqüência inversado termo”, é a base dos sistemas de busca e localização. Eles analisam os termos que mais aparecem nos textos e os cruzam com um sistema de filtro, mostrando a relevância dos temas para a busca.Algumas das idéias e teorias que ela desenvolveu têm começado a ser colocadas em prática em pesquisas sobre inteligência artificial."
    },
    {
      titulo: "Radia Perlman",
      img: "img/radia_perlman.jpg",
      texto: "Em 1984 foi trabalhar como engenheira da Digital Equipment Corporation (DEC) e recebeu como missão elaborar um protocolo que permitisse que a internet tivesse um alcance maior, sem necessidade de utilizar uma grande quantidade dememória. Diante Diante de tal desafio, ela criouo Spanning Tree Protocol (STP), que permitiu que mais pontes fossem criadas na rede e, dessa maneira carregando pedaços das mensagens que se completariam ao chegar no destinatário. Hoje, aos 72 anos, trabalha na Dell."

    },
    {
      titulo: "Irmã Mary Kenneth Keller",
      img: "img/sister_Mary.png",
      texto: "A freira, que nasceu por volta de 1913, tornou-se a primeira mulher dos Estados Unidos a ter um PhD em Ciência da Computação em 1965. Ela estudou, anteriormente, Matemática e Física, de acordo com o Centre for Computing History, museu localizado em Cambridge, Reino Unido. Em 1958, começou a trabalhar no Dartmouth College – em um centro de informática apenas para homens (na época). Ainda segundo a página da ordem em que ela fez seus votos, Mary foi uma forte defensora do envolvimento no campo da ciência da computação, especialmente devido à crescente demanda por especialistas em computação e TI."
    },
    
    {
      titulo: "Mulheres do ENIAC",
      img: "img/mulheres_eniac.jpg",
      texto: "Estados Unidos - Década de 40.O grupo reunia seis mulheres que foram as primeiras “computers” da história da informática: Betty Snyder, Marlyn Wescoff, Fran Bilas, Kay McNulty, Ruth Lichterman e Adele Goldstine. O grupo era responsável pela configuração do ENIAC (Electronic Numerical Integrator And Computer, o primeiro computador do mundo), dando a ele as instruções para realizar os cálculos necessários. Na época, os primeiros computadores dependiam da influência humana e de aparatos mecânicos para funcionarem."
  
    },
 

  ]

  for (let i = 0; i < arraySlides.length; i++) {
    const radioInput = document.createElement('input');

    radioInput.type = 'radio';
    radioInput.name = 'radio-btn';
    radioInput.id = `radio${i + 1}`;

    const sectionInput = document.querySelector('section .slides');
    sectionInput.appendChild(radioInput);


}

const divFirst = document.createElement('div');
divFirst.classList.add('slide');
divFirst.classList.add('first');
divFirst.id = 'post-1';

divFirst.innerHTML = `
    <img src="${arraySlides[0].img}" alt="${arraySlides[0].titulo}">
    <div class="text-slide">
        <h3>${arraySlides[0].titulo}</h3> 
        <p>${arraySlides[0].texto}</p>
    </div>
`;

const sectionSlidesFirst = document.querySelector('section .slides');
sectionSlidesFirst.appendChild(divFirst);

for (let i = 1; i < arraySlides.length; i++) {
    const div = document.createElement('div');
    div.classList.add('slide');
    div.id = `post-${i + 1}`;

    div.innerHTML = `
        <img src="${arraySlides[i].img}" alt="${arraySlides[i].titulo}">
        <div class="text-slide">
            <h3>${arraySlides[i].titulo}</h3> 
            <p>${arraySlides[i].texto}</p>
        </div>
    `;

    const sectionSlides = document.querySelector('section .slides');
    sectionSlides.appendChild(div);
}

//adicionando a navegação automática

const navigationAuto = document.createElement('div');
navigationAuto.classList.add('navigation-auto');

for (let i = 0; i < arraySlides.length; i++) {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add(`auto-btn${i + 1}`);
    navigationAuto.appendChild(buttonDiv);
}

const sectionSlidesNavigation = document.querySelector('section .slides');
sectionSlidesNavigation.appendChild(navigationAuto);

//adicionando a navegação Manual

const navigationManual = document.createElement('div');
navigationManual.classList.add('navigation-manual');

for (let i=0; i < arraySlides.length; i++){
  const label = document.createElement('label');
  label.setAttribute('for', `radio${i +1}`);
  label.classList.add('manual-btn');
  navigationManual.appendChild(label)
}

const slider = document.querySelector('section .slider');
console.log(slider)
slider.appendChild(navigationManual);


//Adicionando o CSS


const sectionSlides = document.querySelector('section .slides');

function atualizarSlidesWidth() {
    const slideContador = arraySlides.length;
    const newWidth = slideContador * 100 + '%';
    sectionSlides.style.width = newWidth;
    quantidadeDeSlides = parseInt(newWidth) / 100; // Verificar no console se está funcionando
    console.log(`Você tem ${quantidadeDeSlides} slides.`);

    // Ajustando a largura dos slides
    if (slideContador < 11) {
        const maxWidth = 100; // Largura máxima em percentagem
        let slideWidth = maxWidth / slideContador; // Calcula a largura do slide

        // Aplica a largura a cada slide
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.style.width = slideWidth + '%';
            console.log(`Cada slide ocupa ${slideWidth} % da largura total `);
        });

        for (let i = 0; i < slideContador; i++) {
            const style = document.createElement('style');
            style.textContent = `
                #radio${i + 1}:checked ~ .first {
                    margin-left: -${i * slideWidth}%;    
                }`;
            document.head.appendChild(style);
        }

        document.addEventListener('DOMContentLoaded', function () {
          const radios = document.querySelectorAll('input[name="radio-btn"]');
          const labels = document.querySelectorAll('label');
          console.log(labels) 
          radios.forEach((radio, index) => {
              radio.addEventListener('change', () => {
                  resetStyles(labels);
                  if (radio.checked) {
                      labels[index].style.background = '#b78ebd';
                  }
              });
          });
              
          radios[0].checked = true;
          labels[0].style.background = '#b78ebd';

          function resetStyles(elements) {  
              elements.forEach(element => {
                  element.style.background = '';
                   
              });
          }   
      });
    } 
    else {
        console.log ('Não é possível adicionar mais slides');
    }
}

atualizarSlidesWidth();



