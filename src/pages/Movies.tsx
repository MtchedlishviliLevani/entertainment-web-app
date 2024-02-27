import MovieList from '../components/home/MovieList'

function Movies() {
    return (
        <div>
            <MovieList heading={"MOVIES"} startIndex={5} lastIndex={28} />
        </div>
    )
}

export default Movies
