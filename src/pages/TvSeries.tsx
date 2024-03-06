import MovieList from "../components/MovieList";
import useMyContext from "../hooks/useMyContext";


export default function TvSeries() {
    const context = useMyContext();
    const filteredData = context?.movies.filter((e) => e.category === "TV Series");
    return (
        <div className="">
            <div className="mt-[30px]">
                <MovieList heading="TV Series" data={filteredData} />
            </div>
        </div>
    );
}
