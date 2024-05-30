import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Key } from "react";

interface Movie {
  id: Key;
  poster_path: string;
  title: string;
  overview: string;
}

function Card({ movie }: { movie: Movie }) {
  const IMAGE_BASE_URL =
    "https://media.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div>
      <Link href={"/movies/" + movie.id}>
        <div className="card" style={{ width: "15rem" }}>
          <Image 
            src={IMAGE_BASE_URL + movie.poster_path} 
            alt={movie.title} 
            className="card-img-top" 
            width={220} 
            height={330} 
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text overflow-y-auto" style={{ height: "150px" }}>
              {movie.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
