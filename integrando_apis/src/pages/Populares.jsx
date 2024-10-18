import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function Populares() {

    const [filmes,setFilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-br')
            .then(res => res.json())
            .then(data => setFilmes(data.results))
            .catch(err => console.log(err))
    }, [])

    console.log(filmes)

    return(
        <>
            {
                filmes
                .map(filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
            }
        </>
    )
}