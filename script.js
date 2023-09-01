const series = [
    {
        name:'Peaky Blinders',
        description: 'Em 1919, um infame gangue de Birmingham é liderado pelo cruel Tommy Shelby, um patrão do crime determinado a conquistar o mundo a qualquer preço.',
        image: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/07/peaky-blinders.jpg',
        find: 'Netflix'
    },

    {
        name:'Breaking Bad',
        description: 'Um professor do secundário com cancro do pulmão terminal junta-se a um ex-aluno para fabricar e vender metanfetaminas como forma de garantir o futuro da sua família.',
        image: 'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/11/breaking-bad.jpg',
        find: 'Netflix'
    },

    {
        name:'You',
        description: 'Um gerente de livraria fica apaixonado por uma aspirante a escritora. Como forma de tentar se aproximar, ele pesquisa as redes sociais dela para descobir seus gostos. O gerente vai ficando cada vez mais obcecado e é capaz de tudo para afastar quem atrapalha seus planos.',
        image: 'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2019/01/f195541d-you-netflix-serie-livro.jpg',
        find: 'Netflix'
    },

    {
        name:'Lost',
        description: 'Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver.',
        image: 'https://img.olhardigital.com.br/wp-content/uploads/2023/05/lost-1.jpg',
        find: 'Star+'
    },
    
    {
        name:'From',
        description: 'Um casal e seus filhos tentam sobreviver na estranha cidade dos Estados Unidos que prende todos que entrarem nela. Juntos, a população tenta encontrar um meio de sair e ainda precisam lutar pela sobrevivência ao serem bombardeados por seres ocultos nas florestas, incluindo terríveis criaturas da noite.',
        image: 'https://novidad.es/content/images/2022/02/from.jpg',
        find: 'Globoplay'
    },

    {
        name:'The Last of Us',
        description: 'A HBO apresenta uma série pós-apocalíptica inspirada no aclamado videogame que segue a jornada brutal e angustiante de um homem cínico e uma garota de 14 anos enquanto cruzam os Estados Unidos, dependendo apenas um do outro para sobreviver.',
        image: 'https://manualgeek.com.br/wp-content/uploads/2023/01/Capa-Facebook-rosa-nao-ignore-o-seu-potencial.jpg',
        find: 'HBO Max'
    },

    {
        name:"Grey's Anatomy",
        description: 'A série foca na vida de médicos cirurgiões internos, residentes e atendentes; e como eles evoluem na sua profissão ao tentar manter a vida dos seus pacientes e nos seus relacionamentos pessoais',
        image: 'https://lumiere-a.akamaihd.net/v1/images/gra_s17_ka_4000x2250_v2_logoonly_d56d8170.jpeg',
        find: 'Star+'
    },

]


function pickSeries() {
    const pickRandom = Math.floor(Math.random() * series.length) //Math.random gera número aleatórios, porém quebrados
    const pickedSerie = series[pickRandom]

    document.getElementById('serieName').textContent = pickedSerie.name
    document.getElementById('serieImage').src = pickedSerie.image
    document.getElementById('serieDescription').textContent = pickedSerie.description
    document.getElementById('serieFind').textContent = 'Onde assistir: ' + pickedSerie.find
    document.getElementById('credits').textContent = 'Criado por Alexandre Koenich'
    document.getElementById('containerMain')
}

//math.floor vai deixar os números inteiros
//math.random vai pegar um numero aleatório
// series.length vai pegar um numero dentro do tamanho da array

const button = document.getElementById('button')
button.addEventListener('click', pickSeries)

