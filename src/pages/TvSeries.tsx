import MovieList from "../components/home/MovieList";
import data from "../data.json";

export default function TvSeries() {
    const filteredData = data.movies.filter((e) => e.category == "TV Series");
    return (
        <div className="container">
            <div className="mt-[30px]">
                <MovieList heading="TV Series" data={filteredData} />
            </div>
        </div>
    );
}
