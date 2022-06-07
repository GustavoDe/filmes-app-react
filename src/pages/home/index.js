import { Container, MovieList, Movie } from "./styles"
/* import {APIKey} from '../../config/key' */
import { APIKey, databaseIMg } from "../../config/apiConfig";
import { useEffect, useState } from "react"

function Home() {
    //o useState([]) indica que a váriavel vai iniciar com um array vazio;
    //O useState ele retorna duas coisas 1º uma variável que armazena o estado em si no caso 'movies'
    //2º Uma variável que atualiza esse estado 'setMovies'
    //o uso effect é utilizado para executar o consumo de dados toda vez que o programa for iniciado
    const [movies, setMovies] = useState([]);
    //o useEffect aceita dois parametros, o primeiro é o que deseja ser executado no caso consumir a api, e em 2º um array de dependencias
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
            .then(response => response.json() )
            .then(data => 
                setMovies(data.results)
                
            )
    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {

                    return (
                        <Movie key={movie.id}>
                            <a href="google.com.br">
                                <img src={databaseIMg + movie.poster_path} alt={movie.title} />
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home