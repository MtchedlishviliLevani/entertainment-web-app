import MovieList from '../components/MovieList'
import useMyContext from '../hooks/useMyContext';

function Movies() {
    const my1Context = useMyContext()
    const dataFilt = my1Context?.movies.filter((e) => e.category == "Movie");

    return (
        <div className=''>
            <div className='mt-[30px]'>
                <MovieList heading={"MOVIES"} data={dataFilt} />

            </div>
        </div>
    )
}

export default Movies
