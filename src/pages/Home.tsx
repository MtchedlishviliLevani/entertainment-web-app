import MovieList from "../components/home/MovieList";
import Trending from "../components/home/Trending";

function Home() {
    return (
        <>
            <div className="container">
                <div className="mt-[40px]">
                    <Trending />
                </div>
                <div className="mt-[50px]">
                    <MovieList heading="Recomended for you" startIndex={5} lastIndex={28} />
                </div>
            </div>
        </>
    );
}

export default Home;
