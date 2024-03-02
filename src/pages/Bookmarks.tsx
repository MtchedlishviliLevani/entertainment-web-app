// import React, { useContext } from 'react'
import { useContext } from 'react'
import MovieList from '../components/home/MovieList'
// import data from "../data.json"
// import { myContext } from '../App'
import { useMyContext } from '../contex';

function Bookmarks() {
    const my1Context = useMyContext()
    const filtredData = my1Context?.movies.filter((movie) => movie.isBookmarked == true);
    console.log(filtredData)
    return (
        <div>
            {/* {myCont} */}
            <MovieList heading='Bookmarks' data={filtredData} />
        </div>
    )
}

export default Bookmarks
