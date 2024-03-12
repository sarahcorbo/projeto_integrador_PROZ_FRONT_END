const cursos = [
    {
        titulo: "WoMakersCode",
        descricao: "WoMakersCode é a maior comunidade de mulheres na tecnologia da América Latina, dedicada a impulsionar o protagonismo feminino no setor por meio de formação técnica, mentorias e apoio à empregabilidade. Fundada em 2015, evoluiu de um coletivo para uma organização sem fins lucrativos em 2021, oferecendo mais de 700 atividades, incluindo cursos, programas de formação, orientação de carreira e eventos. Com um impacto em mais de 250 mil mulheres, a WoMakersCode é reconhecida por seu compromisso com a inclusão, a diversidade e a inovação, contando com o apoio de diversas empresas parceiras e premiações importantes.",
        imagem: "./img/imgcursos2.jpg",
        alt: "Logo empresa WomakersCode"
    },
    {
        titulo: "MulheresTECH",
        descricao: "O programa Mulheres Tech da Prefeitura do Rio de Janeiro é uma iniciativa inovadora projetada para promover a inclusão das mulheres no campo da tecnologia e do desenvolvimento digital. Com o objetivo de reduzir a disparidade de gênero no setor de tecnologia, o programa oferece cursos de capacitação, workshops e mentorias em diversas áreas tecnológicas, incluindo programação, design gráfico, desenvolvimento web e muito mais. Desenvolvido para empoderar as mulheres e proporcionar-lhes as habilidades necessárias para prosperar em um mercado de trabalho cada vez mais digital, o Mulheres Tech busca não apenas educar, mas também inspirar participantes a se tornarem líderes e inovadoras na área de tecnologia.",
        imagem: "./img/imgcursos3.jpg",
        alt: "Logo Prefeitura do Rio de Janeiro"
    },
    {
        titulo: "Reprograma",
        descricao: "O {reprograma} é uma iniciativa que busca empoderar mulheres, especialmente aquelas em situações de vulnerabilidade, como mulheres negras, trans e travestis, por meio da educação tecnológica. Focando em programação, o projeto oferece cursos online gratuitos e intensivos com o objetivo de inseri-las no mercado de tecnologia, contribuindo para a diminuição da desigualdade de gênero no setor. Além da capacitação em programação, o {reprograma} promove uma rede de apoio e mentoria, essenciais para o desenvolvimento profissional e pessoal das participantes. Através dessa comunidade, as alunas ganham confiança e habilidades para navegar e prosperar em uma indústria dominada por homens, incentivando a inovação e a diversidade no mundo tech. ",
        imagem: "./img/imgcursos4.jpg",
        alt: "Logo empresa Reprograma"
    }
];

function renderizarCursos() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    cursos.forEach(curso => {
        const coluna = document.createElement('div');
        coluna.classList.add('coluna');

        coluna.innerHTML = `
            <img src="${curso.imagem}" alt="${curso.alt}" style="border-radius: 50%;">
            <h4>${curso.titulo}</h4>
            <p style="text-align: justify;">${curso.descricao}</p>
        `;
        container.appendChild(coluna);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderizarCursos();
});
