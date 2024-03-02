// import { useContext } from "react";
// import { useContext } from "react";
import MovieList from "../components/home/MovieList";
import { useMyContext } from "../contex";
// import data from "../data.json";
// import { myContext } from "../App";

export default function TvSeries() {
    const context = useMyContext();
    // console.log(context?.movies.)
    // const my1Context = useContext(myContext)
    // const filteredData = my1Context?.movies.movies.filter((e) => e.category == "TV Series");
    const filteredData = context?.movies.filter((e) => e.category === "TV Series")
    return (
        <div className="">
            <div className="mt-[30px]">
                <MovieList heading="TV Series" data={filteredData} />
            </div>
        </div>
    );
}
