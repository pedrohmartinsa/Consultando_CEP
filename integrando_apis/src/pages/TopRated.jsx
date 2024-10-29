import FilmsPage from "../components/FilmsPage"

export default function TopRated() {
    return(
        <>
            <FilmsPage 
            api_link= 'https://api.themoviedb.org/3/movie/top_rated?api_key=c360aba74614c6e9141db60a0c2102e7&language=pt-BR'/>
        </>
    )
}