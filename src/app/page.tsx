import { Key } from "react";
import { getTrendingMovies } from "../../Utils/request";
import Card from "./components/card"; // Pastikan jalur impor ini benar

interface Movie {
  id: Key;
  poster_path: string;
  title: string;
  overview: string;
}

export default async function HomePage() {
  const movies: Movie[] = await getTrendingMovies();
  return (
    <div className="container my-3">
      <h1 className="text-4xl font-bold mb-4">Top Trending Movies</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {movies.map((movie: Movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
