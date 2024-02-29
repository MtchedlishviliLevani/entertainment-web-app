import MovieList from "../components/home/MovieList";
import Trending from "../components/home/Trending";
import dataJson from "../data.json"

function Home() {
    const data = dataJson.movies.slice(5,);
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
