import { get } from "http";
import { getTraceEvents } from "next/dist/trace";
import Image from "next/image";
import { getTrendingMovies } from "../../Utils/request";
import card from "@material-tailwind/react/theme/components/card";
import Card from "./components/card";

export default async function HomePage() {
  const movies = await getTrendingMovies();
  return (
    <div className="container my-3">
      <h1 className="text-4xl font-bold mb-4">Top Trending Movies</h1>
      <div className="flex flex-row flex-wrap gap-3">
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}
