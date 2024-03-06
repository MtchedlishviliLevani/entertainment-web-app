import MovieList from "../components/MovieList";
import Trending from "../components/home/Trending";
import useMyContext from "../hooks/useMyContext";

function Home() {
    const myContext = useMyContext();
    const data = myContext?.movies.slice(5);

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
