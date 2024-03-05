import MovieList from '../components/MovieList'
import useMyContext from '../hooks/useMyContext';

function Bookmarks() {
    const my1Context = useMyContext()
    const filtredData = my1Context?.movies.filter((movie) => movie.isBookmarked == true);
    return (
        <div className='mt-[30px]'>
            <MovieList heading='Bookmarks' data={filtredData || []} />
        </div>
    )
}

export default Bookmarks
