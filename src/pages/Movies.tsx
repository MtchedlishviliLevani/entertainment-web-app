import { useContext } from 'react';
import MovieList from '../components/home/MovieList'
// import data from "../data.json"
// import { myContext } from '../App';
import { useMyContext } from '../contex';

function Movies() {
    const my1Context = useMyContext()
    const dataFilt = my1Context?.movies.filter((e) => e.category == "Movie");
    // const dataFilt = data.movies.filter((movie) => movie.category == "Movie");
    // const dataFilt = data.movies.filter((movie) => movie.category == "Movie");

    return (
        <div className=''>
            <div className='mt-[30px]'>
                <MovieList heading={"MOVIES"} data={dataFilt} />
            </div>
        </div>
    )
}

export default Movies
