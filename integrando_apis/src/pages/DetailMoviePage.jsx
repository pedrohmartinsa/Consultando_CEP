import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DetailMoviePage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => (
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-BR`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
            .finally(() => console.log('fetch finalizado'))
    ), [])

    return(
        <>
            <div>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
        </>
    )
}