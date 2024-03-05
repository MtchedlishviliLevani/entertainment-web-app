// import { useContext } from "react";
import MovieList from "../components/MovieList";
import Trending from "../components/home/Trending";
// import dataJson from "../data.json"
// import { myContext } from "../App";
import useMyContext from "../hooks/useMyContext";
// import { useMoviesStore } from "../store";


function Home() {
    const myContext = useMyContext()
    // console.log(my1Context?.movies.movies)
    // const data = my1Context?.movies.movies.slice(5, 29);
    const data = myContext?.movies.slice(5,)
    // const data = dataJson.movies.slice(5,);

    return (
        <>
            <div className="">
                <div className="mt-[40px]">
                    <Trending />
                </div>
                <div className="mt-[50px]">
                    <MovieList heading="Recomended for you" data={data || []} />
                </div>
            </div>
        </>
    );
}

export default Home;
