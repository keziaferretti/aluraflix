// var listaFilmes = [
//   "Uma sexta-feira muito louca",
//   "As branquelas",
//   "O Senhor dos anéis"
// ];

// // add novos elementos:
// listaFilmes.push("Vingadores");
// listaFilmes.push("Se beber não case");

// // document.write("<p>" + listaFilmes[0] + "</p>");
// // document.write("<p>" + listaFilmes[1] + "</p>");
// // document.write("<p>" + listaFilmes[2] + "</p>");
// // document.write("<p>" + listaFilmes[3] + "</p>");

// //laço um loop

// //    valor inicial.  condição    expressão final
// for (var indice = 0; indice < listaFilmes.length; indice++) {
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }

var listaFilmes = [
  "https://cineclick-static.flixmedia.cloud/1280/69/1080x1620_1588951497.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg",
  "https://m.media-amazon.com/images/I/514M+qMYWSL.jpg"
];

//    valor inicial.  condição    expressão final
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src= " + listaFilmes[i] + ">");
}
