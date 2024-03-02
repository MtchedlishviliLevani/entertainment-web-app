// import { useContext } from "react";
import MovieList from "../components/home/MovieList";
import Trending from "../components/home/Trending";
// import dataJson from "../data.json"
// import { myContext } from "../App";
import { useMyContext } from "../contex";
// import { useMoviesStore } from "../store";


function Home() {
    const my1Context = useMyContext()
    // console.log(my1Context?.movies.movies)
    // const data = my1Context?.movies.movies.slice(5, 29);
    const data = my1Context?.movies.slice(5,)
    // const data = dataJson.movies.slice(5,);

    return (
        <>
            <div className="">
                <div className="mt-[40px]">
                    <Trending />
                </div>
                <div className="mt-[50px]">
                    <MovieList heading="Recomended for you" data={data} />
                </div>
            </div>
        </>
    );
}

export default Home;
