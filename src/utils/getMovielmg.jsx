function getMovieImg(path, width) {
    return path? `https://image.tmdb.org/t/p/w${width}${path}` : null;
}

// const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

export default getMovieImg(path, width) ;