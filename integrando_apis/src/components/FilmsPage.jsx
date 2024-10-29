import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

export default function FilmsPage( {api_link} ) {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch(api_link)
            .then(res => res.json())
            .then(data => setFilmes(data.results))
            .catch(err => console.log(err))
    }, [])

    console.log(filmes)

    return(
        <>
            <div className="flex flex-wrap justify-between items-center">
                {
                    filmes
                    .map(filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </div>
        </>
    )
}