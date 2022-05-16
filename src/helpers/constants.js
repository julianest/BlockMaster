export const Constantes ={
    //Datos para cargar
    apiKey: "&api_key=2c132b2bc2a890517739d20437cf6fee",
    baseUrl:"https://api.themoviedb.org/3",
    posterPath: "https://image.tmdb.org/t/p/w185_and_h278_bestv2",
    //Api´s organizadas segun clasificacion
    //https://www.themoviedb.org/documentation/api/discover
    inTheatres: "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22",
    popularMovies: "/discover/movie?sort_by=popularity.desc",
    highRated: "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc",
    popularKidsMovies: "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
    best2010: "/discover/movie?primary_release_year=2010&sort_by=vote_average.desc",
    dramas2014: "/discover/movie?with_genres=18&primary_release_year=2014",
    sciencieFictionTom: "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc",
    willFerrelComedys: "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc",
    liamNeeson: "/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896",
    bradPitt: "/discover/movie?with_people=287,819&sort_by=vote_average.desc",
    bestDramas: "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10",
    davidFicher: "/discover/movie?with_people=108916,7467&sort_by=popularity.desc"
}


//Tutorial para obtencion de API peliculas en https://www.themoviedb.org/
//https://www.youtube.com/watch?v=bYUp3yAdFs4
//Se debe registrar luego obtener la api.key luego unirla info asi.
//const urlCargarFirebase=`${Constantes.baseUrl}${Constantes.best2010}${Constantes.apiKey}`;
//console.log(urlCargarFirebase);  

