// vamos aprender agora como fazer manipúlação básica de arrays, já que esse capítulo é sobre arrays!

const discosDeMusica = [
  // o array funciona como uma variável de vários valores de diferentes tipos
  {
    titulo: "Dark Side of the Moon",
    artista: "Pink Floyd",
    anoLancamento: 1973,
    genero: "Rock Progressivo",
    faixas: [
      "Speak to Me",
      "Breathe",
      "On the Run",
      "Time",
      "The Great Gig in the Sky",
      "Money",
      "Us and Them",
      "Any Colour You Like",
      "Brain Damage",
      "Eclipse",
    ],
  },
  {
    titulo: "Thriller",
    artista: "Michael Jackson",
    anoLancamento: 1982,
    genero: "Pop",
    faixas: [
      "Wanna Be Startin' Somethin'",
      "Baby Be Mine",
      "The Girl Is Mine",
      "Thriller",
      "Beat It",
      "Billie Jean",
      "Human Nature",
      "P.Y.T. (Pretty Young Thing)",
      "The Lady in My Life",
    ],
  },
  {
    titulo: "Abbey Road",
    artista: "The Beatles",
    anoLancamento: 1969,
    genero: "Rock",
    faixas: [
      "Come Together",
      "Something",
      "Maxwell's Silver Hammer",
      "Oh! Darling",
      "Octopus's Garden",
      "I Want You (She's So Heavy)",
      "Here Comes the Sun",
      "Because",
      "You Never Give Me Your Money",
      "Sun King",
      "Mean Mr. Mustard",
      "Polythene Pam",
      "She Came In Through the Bathroom Window",
      "Golden Slumbers",
      "Carry That Weight",
      "The End",
      "Her Majesty",
    ],
  },
];

// temos acima um gigantesco array que conta com 3 objetos que tem dentro de cada um deles uma música com suas respectivas informações, dentro de cada objeto
// existem 3 strings, 1 number, e um array, que tem as faixas que são strings
// os arrays, são compostos, por seus Índices, começando com 0, e indo até N, que são o Mínimo e o máximo
// para acessar:

//! índices
console.info(discosDeMusica[0]); // mostrará o primeiro objeto, que está dentro do array
console.info(discosDeMusica[2].faixas[2]); // Maxwell's Silver Hammer
console.info(discosDeMusica[1].faixas[4]); // Beat It

//! índices de forma dinâmica
console.info(discosDeMusica[discosDeMusica.length - 1]); // retorna o último índice do array

/*
{
  titulo: 'Abbey Road',
  artista: 'The Beatles',
  anoLancamento: 1969,
  genero: 'Rock',
  faixas: [
    'Come Together',
    'Something',
    "Maxwell's Silver Hammer",
    'Oh! Darling',
    "Octopus's Garden",
    "I Want You (She's So Heavy)",
    'Here Comes the Sun',
    'Because',
    'You Never Give Me Your Money',
    'Sun King',
    'Mean Mr. Mustard',
    'Polythene Pam',
    'She Came In Through the Bathroom Window',
    'Golden Slumbers',
    'Carry That Weight',
    'The End',
    'Her Majesty'
  ]
}
 */

console.info(discosDeMusica[discosDeMusica.length - 2]); // retorna o penúltimo elemento

/*
{
  titulo: 'Thriller',
  artista: 'Michael Jackson',
  anoLancamento: 1982,
  genero: 'Pop',
  faixas: [
    "Wanna Be Startin' Somethin'",
    'Baby Be Mine',
    'The Girl Is Mine',
    'Thriller',
    'Beat It',
    'Billie Jean',
    'Human Nature',
    'P.Y.T. (Pretty Young Thing)',
    'The Lady in My Life'
  ]
}
 */

//! length
console.info(discosDeMusica.length); // mostrará a quantidade de elementos que tem no array, == 3
console.info(discosDeMusica[2].faixas.length); // mostrará a quantidade de índices, na prop faixas, do índice 2, que nesse caso, é o terceiro, == 17
console.info(discosDeMusica[1].faixas.length); // Mostrará a quantidade de índices, na prop faixas, do ídice 1, que nesse caso, é o segundo, == 9

// mas de agora em diante vamos para cada um dos métodos, utilizáveis, para que possamos, manipular os dados

//! Fatias, método Slice()

console.info(discosDeMusica[2].faixas.slice(12)); // vai pegar do 13° índice do array faixas, do terceiro objeto em diante, até o final do array, ou seja, uma fatia apenas

/*
[
  'She Came In Through the Bathroom Window',
  'Golden Slumbers',
  'Carry That Weight',
  'The End',
  'Her Majesty'
] 
*/

console.info(discosDeMusica[1].faixas.slice(6)); // Vai pegar do 7° índice do array faixas, do segundo objeto em diante, até o final do array

/*
[
  'Human Nature',
  'P.Y.T. (Pretty Young Thing)',
  'The Lady in My Life'
]
 */

// é possível retornar fatias específicas

console.info(discosDeMusica[0].faixas.slice(1, 7)); // Vai pegar do 2° índice do array faixas, do primeiro objeto até o 6° índice

//! Adicionar elementos ao final do Array, método Push()

discosDeMusica.push({
  // método push, que adiciona um novo objeto ao array
  titulo: "Back in Black",
  artista: "AC/DC",
  anoLancamento: 1980,
  genero: "Hard Rock",
  faixas: [
    "Hells Bells",
    "Shoot to Thrill",
    "What Do You Do for Money Honey",
    "Given the Dog a Bone",
    "Let Me Put My Love into You",
    "Back in Black",
    "You Shook Me All Night Long",
    "Have a Drink on Me",
    "Shake a Leg",
    "Rock and Roll Ain't Noise Pollution",
  ],
});

console.info(discosDeMusica.length); // == 4

//! Adicionar elementos ao começo do Array, método Unshift()

discosDeMusica.unshift({
  titulo: "Random Access Memories",
  artista: "Daft Punk",
  anoLancamento: 2013,
  genero: "Electro-funk, Disco",
  faixas: [
    "Give Life Back to Music",
    "The Game of Love",
    "Giorgio by moroder",
    "Within",
    "instant Crush",
    "Lose yourself to dance",
    "touch",
    "get Lucky",
    "Beyond",
    "MotherBoard",
    "Fragments of time",
    "Doin'it Rigth",
    "Contact",
  ],
});

console.info(discosDeMusica.length); // == 5

//! Remover elementos do final do Array, método Pop()

console.info(discosDeMusica.pop()); // Retorna o elemento removido no final
// para remover o elemento sem mostrar no console, basta colocá-lo fora do console.info()
console.info(discosDeMusica.length); // voltou a ser apenas 4 elementos, já que o quinto elemento, a música, back in black, foi removido

//! Remover elementos do começo do Array, método Shift()

console.info(discosDeMusica.shift()); // retorna o elemento removido no começo
//  para remover o elemento sem mostrar no console, basta colocá-lo fora do console.info()
console.log(discosDeMusica.length); // voltou a ser apenas 3 elementos, já que o primeiro elemento, a música Random Access Memories, foi removido

// fazendo assim que o valor volte a ser o valor inicial do array

//! Remover Fatias, método Splice()

// esse método é o contrário do Slice(), ele pega o número que foi inserido para trás, e o resto é apagado

console.info(discosDeMusica[1].faixas.splice(0, 3)); // vai pegar os 3 primeiros elementos do Array faixas, e ignorar o resto
console.info(discosDeMusica[2].faixas.splice(1, 2)); // vai pegar o segundo e o terceiro elemento do Array faixas e ignorar o resto

// vale lembrar que o console serve para mostrar os valores removidos, se esses mesmos arrays forem mostrados outra vez, estarão sem esses conteúdos

console.info(discosDeMusica[2].faixas);

/*
 [
  'Come Together',
  'Oh! Darling',
  "Octopus's Garden",
  "I Want You (She's So Heavy)",
  'Here Comes the Sun',
  'Because',
  'You Never Give Me Your Money',
  'Sun King',
  'Mean Mr. Mustard',
  'Polythene Pam',
  'She Came In Through the Bathroom Window',
  'Golden Slumbers',
  'Carry That Weight',
  'The End',
  'Her Majesty'
]
 */

//! Localizando índices com o método indexOf()

let index = discosDeMusica[2].faixas.indexOf("Because")
console.info(index); // == 5, pois é o sexto elemento após as remoções anteriores

// é possivel combinar essa ação com a ação do método Splice()
// da seguinte forma:

discosDeMusica[2].faixas.splice(index, 1);

console.info(discosDeMusica[2].faixas); // resultado, sem o índice que contém o termo "Because", o índice 5


