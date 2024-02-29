import MovieList from '../components/home/MovieList'
import data from "../data.json"

function Movies() {
    const dataFilt = data.movies.filter((e) => e.category == "Movie");
    return (
        <div className=''>
            <div className='mt-[30px]'>
                <MovieList heading={"MOVIES"} data={dataFilt} />
            </div>
        </div>
    )
}

export default Movies
