import { useRouter } from 'next/router';
import { getMovieDetails, getSimilarMovies } from '../../../../Utils/request';

interface Params {
    id: string;
}

async function MovieDetailsPage({ params }: { params: Params }) {
    const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);

    return (
        <div className="my-8 mx-4">
            {/* Movie Details */}
            <div className="flex items-center">
                <div className="w-1/3">
                    <img src={IMAGE_BASE_URL + movieDetails.backdrop_path} alt="" className="rounded-lg" />
                </div>
                <div className="mx-8 w-2/3">
                    <h3 className="text-3xl font-semibold mb-4">{movieDetails.title}</h3>
                    <div className="flex mb-4">
                        {movieDetails.release_date && (
                            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded">{movieDetails.release_date}</p>
                        )}
                        {movieDetails.original_language && (
                            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded">{movieDetails.original_language}</p>
                        )}
                        {movieDetails.status && (
                            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded">{movieDetails.status}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        {movieDetails.genres.map((genre: { id: number; name: string }) => (
                            <span className="mx-1 p-1 bg-gray-800 text-white rounded" key={genre.id}>{genre.name}</span>
                        ))}
                    </div>
                    <p className="text-lg">{movieDetails.overview}</p>
                </div>
            </div>

            {/* Similar Movies */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
                <div className="flex flex-wrap gap-4">
                    {similarMovies.map((movie: { id: number; poster_path: string; title: string }) => (
                        <div className="w-1/4" key={movie.id}>
                            <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} className="rounded-lg" />
                            <div className="mt-2">
                                <h5 className="text-lg font-semibold">{movie.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
