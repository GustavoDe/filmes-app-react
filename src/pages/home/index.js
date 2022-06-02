import { Container, MovieList, Movie } from "./styles"

function Home() {
    const movies = [
        {
            title: "The Batman",
            image_url: "https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg"
        },
        {
            title: "Batman O cavaleiro das trevas",
            image_url: "https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg"

        },
        {
            title: "Coringa",
            image_url: "https://s2.glbimg.com/SQeVdjKCjqzbxdQPl_u0-Fofq-k=/362x536/https://s2.glbimg.com/9OPnzDyVxRn-Eh-9lnCEzKcVY7Q=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2021/E/H/rJSyxnTomNRR1CRbfAkw/6605194-poster.jpg"

        }
    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {

                    return (
                        <Movie>
                            <a href="google.com.br">
                                <img src={movie.image_url} alt={movie.title} />
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