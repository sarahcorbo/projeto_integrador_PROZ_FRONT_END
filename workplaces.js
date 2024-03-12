// Selecionamos todas os títulos dentro das colunas
var titulos = document.querySelectorAll('.colunas h4');

// Estilizamos os títulos
for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.fontSize = '2.5rem';
    titulos[i].style.textAlign = 'center';
    titulos[i].style.marginTop = '4rem';
    titulos[i].style.color = '#b78ebd';
    titulos[i].style.fontFamily = "'Roboto', sans-serif";
    titulos[i].style.marginBottom = '2rem';
}

// Selecionamos todas os parágrafos dentro das colunas
var paragrafos = document.querySelectorAll('.colunas p');

// Estilizamos os parágrafos
for (var j = 0; j < paragrafos.length; j++) {
    paragrafos[j].style.alignItems = 'center';
    paragrafos[j].style.fontSize = '1.7rem';
    paragrafos[j].style.textAlign = 'center';
    paragrafos[j].style.letterSpacing = '1px';
    paragrafos[j].style.marginTop = '2rem';
}

// Selecionamos todas as imagens dentro das colunas
var imagens = document.querySelectorAll('.colunas img');

// Aplicamos estilos às imagens
for (var i = 0; i < imagens.length; i++) {
    imagens[i].style.borderRadius = '8px';
    imagens[i].style.border = '2px solid #b78ebd';
}


var largura = document.querySelectorAll('.colunas')

for (var k = 0; k < largura.length; k++) {
    largura[k].style.width = '400px';
}



