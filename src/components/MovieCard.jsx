export function MovieCard({movie}) {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="text-xl text-center list-none
    transition duration-500 hover:opacity-50 hover:-translate-y-7">
      <img 
        width={230} 
        height={345} 
        src={imgUrl}
        alt={movie.title}
        className="rounded-lg sm:w-9/10 sm:h-auto"
      />
      <div className="mt-4">
      {movie.title}
      </div>
    </li>
  )
}

