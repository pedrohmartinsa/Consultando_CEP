import { Link } from "react-router-dom";

export default function MovieCard({ id, poster_path, title }) {
    return (
        <>
        <div className="flex flex-col items-center">
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title} />
            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </div>
        </>
    )
}