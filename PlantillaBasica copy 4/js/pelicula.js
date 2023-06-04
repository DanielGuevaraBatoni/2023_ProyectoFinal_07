var urlParams = new URLSearchParams(window.location.search);
var peliculaId = urlParams.get('peliculaId');

var peliculas = [
  {
    id: "megalodon2",
    nombre: "Megalodon 2",
    director: "Ben Wheatley",
    fecha: "02/08/2023",
    sinopsis: "Los actores Jonathan Statham, como el célebre Jonas Taylor, y Wu Jing lideran a un equipo de investigación que se sumerge en una inmersión en las profundidades del océano. Una misión que se ve en peligro cuando una malévola operación minera amenaza su tarea y les obliga a librar una arriesgada batalla por la supervivencia al luchar contra los Megalodones más terroríficos. Según recoge la propia sinopsis oficial de Warner: enfrentados a Megalodones colosales y a implacables saqueadores del medio ambiente, nuestros héroes deben completar su objetivo, ser más astutos y nadar mejor que sus despiadados depredadores en una trepidante carrera contrarreloj.",
    imdb: "https://www.imdb.com/title/tt9224104/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=C1FmYERF0pk"
  },
  {
    id: "el_padrino1",
    nombre: "El Padrino 1",
    director: "Francis Ford Coppola",
    fecha: "20/10/1972",
    sinopsis: "Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.",
    imdb: "https://www.imdb.com/title/tt0068646/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA"
  },
  {
    id: "garra",
    nombre: "Garra",
    director: "Jeremiah Zagar",
    fecha: "03/06/2022",
    sinopsis: "Un cazatalentos de baloncestistas en horas bajas descubre un jugador con enorme talento pero con un pasado difícil. Sin la aprobación de su equipo, decide llevárselo con él. Será la última oportunidad para demostrar que ambos son dignos de la NBA.",
    imdb: "https://www.imdb.com/title/tt8009428/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=nM4iy0reaCA"
  },
  {
    id: "8apellidos",
    nombre: "8 Apellidos Vascos",
    director: "Emilio Martínez Lázaro",
    fecha: "14/03/2014",
    sinopsis: "Rafa, un señorito andaluz que nunca ha salido de Sevilla, decide dejarlo todo para conquistar a Amaia, una chica vasca. Se muda al País Vasco y allí tendrá que adaptarse a un nuevo entorno y hacerse pasar por vasco para ganarse la aprobación del padre de Amaia.",
    imdb: "https://www.imdb.com/title/tt2955316/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=IovDwF9SX6Q"
  },
  {
    id: "avatar",
    nombre: "Avatar",
    director: "James Cameron",
    fecha: "10/12/2009",
    sinopsis: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.",
    imdb: "https://www.imdb.com/title/tt0499549/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: "CapPhip",
    nombre: "Capitán Phillips",
    director: "Paul Greengrass",
    fecha: "18/10/2013",
    sinopsis: "En el año 2009, un grupo de piratas somalíes secuestran un barco carguero estadounidense y toman como rehenes a la tripulación. Entre ellos está el capitán del navío, Richard Phillips.",
    imdb: "https://www.imdb.com/title/tt1535109/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=GEyM01dAxp8"
  },
  {
    id: "cars",
    nombre: "Cars",
    director: "John Lasseter y Joe Ranft",
    fecha: "06/07/2006",
    sinopsis: "El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.",
    imdb: "https://www.imdb.com/title/tt0317219/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=SbXIj2T-_uk"
  },
  {
    id: "interstellar",
    nombre: "Interstellar",
    director: "Christopher Nolan",
    fecha: "07/12/2014",
    sinopsis: "Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.",
    imdb: "https://www.imdb.com/title/tt0816692/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=UoSSbmD9vqc"
  },
  {
    id: "jumanji",
    nombre: "Jumanji",
    director: "Jake Kasdan",
    fecha: "13/12/2019",
    sinopsis: "Las aventuras continúan en el fantástico mundo del juego Jumanji, donde nada es lo que parece. En esta ocasión, los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente?",
    imdb: "https://www.imdb.com/title/tt2283362/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I"
  },
  {
    id: "jurassic",
    nombre: "Jurassic World: Dominio",
    director: "Colin Trevorrow",
    fecha: "10/06/2022",
    sinopsis: "Cuatro años después de la destrucción de la Isla Nublar, los dinosaurios viven y cazan junto a los humanos en todo el mundo. Este frágil equilibrio remodelará el futuro y determinará si los humanos seguirán siendo o no la especie dominante.",
    imdb: "https://www.imdb.com/title/tt8041270/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=fb5ELWi-ekk"
  },
  {
    id: "MarioBros",
    nombre: "Mario Bros",
    director: "Aaron Horvath, Michael Jelenic y Pierre Leduc",
    fecha: "05/04/2023",
    sinopsis: "Dos hermanos plomeros, Mario y Luigi, caen por las alcantarillas y llegan a un mundo subterráneo mágico en el que deben enfrentarse al malvado Bowser para rescatar a la princesa Peach, quien ha sido forzada a aceptar casarse con él.",
    imdb: "https://www.imdb.com/title/tt6718170/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=TnGl01FkMMo"
  },
  {
    id: "minioms",
    nombre: "Minions",
    director: "Kyle Balda y Pierre Coffin",
    fecha: "03/07/2015",
    sinopsis: "Los minions, ingenuos y torpes, buscan un verdadero villano al que servir. A lo largo de una evolución de millones de años, los minions se han puesto al servicio de los amos más despreciables. Kevin, acompañado por el rebelde Stuart y el adorable Bob, emprende un emocionante viaje para conseguir una jefa a quien servir, la terrible Scarlet Overkill.",
    imdb: "https://www.imdb.com/title/tt2293640/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=eisKxhjBnZ0"
  },
  {
    id: "osoyogui",
    nombre: "Oso Yogui",
    director: "Eric Brevig",
    fecha: "17/12/2010",
    sinopsis: "Rachel, una directora de documentales, viaja al Parque Jellystone para filmar un proyecto. Allí no tardará en encontrarse con el carismático Oso Yogui, su inseparable amigo Boo-Boo y el guardabosques Smith, quien siempre está intentando impedir que estos dos osos pardos roben las cestas de picnic de los visitantes.",
    imdb: "https://www.imdb.com/title/tt1302067/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=nPWNFjGU0z0"
  },
  {
    id: "pele",
    nombre: "Pele",
    director: "Ben Nicholas y David Tryhorn",
    fecha: "23/12/2021",
    sinopsis: "Con un turbulento Brasil como telón de fondo, este documental retrata la historia de Pelé: desde sus inicios como nuevo talento hasta su transformación en héroe nacional.",
    imdb: "https://www.imdb.com/title/tt13842562/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=jWBTvOapITE"
  },
  {
    id: "up",
    nombre: "Up",
    director: "Pete Docter y Bob Peterson",
    fecha: "30/07/2009",
    sinopsis: "Carl Fredricksen es un vendedor de globos de 78 años de edad dispuesto a cumplir su sueño: atar miles de globos a su casa y volar a Sudamérica. Sin embargo, descubre demasiado tarde a un joven e inesperado polizón. Lo que en principio será recelo, acabará por tornarse simpatía hacia el muchacho mientras juntos pasan fascinantes aventuras en exóticos lugares.",
    imdb: "https://www.imdb.com/title/tt1049413/",
    valoracion: "IMDb",
    trailer: "https://www.youtube.com/watch?v=qoZo9MiICo0"
  },
];

var pelicula = peliculas.find(function(pelicula) {
  return peliculaId === pelicula.id;
});

document.getElementById('nombre').textContent = pelicula.nombre;
document.getElementById('sinopsis').textContent = pelicula.sinopsis;
document.getElementById('año').textContent = "Fecha: " + pelicula.fecha;
document.getElementById('director').textContent = "Director: " + pelicula.director;
document.getElementById('valoracion').innerHTML = "Valoración: <a href='" + pelicula.imdb + "' target='_blank'>" + pelicula.valoracion + "</a>";


var trailerIframe = document.getElementById('trailer');
if (pelicula.trailer) {
  var youtubeEmbedUrl = pelicula.trailer.replace('watch?v=', 'embed/');
  trailerIframe.src = youtubeEmbedUrl;
} else {
  trailerIframe.style.display = "none"; 
}


