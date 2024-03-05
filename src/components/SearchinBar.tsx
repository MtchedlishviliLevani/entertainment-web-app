import searchIcon from "../assets/images/icon-search.svg";
import MovieList from "./MovieList";
import useMyContext from "../hooks/useMyContext";
interface Props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

function SearchinBar({ searchValue, setSearchValue }: Props) {
    const myContext = useMyContext();
    const searctList = [];

    for (const i of myContext.movies) {
        if (i.title.toLowerCase().includes(searchValue.toLowerCase())) {
            searctList.push(i);
        }
    }
    return (
        <>
            <div className="container xl:px-[0%] xl:mt-[40px]">
                <div className="flex items-center gap-[20px] mt-[20px]">
                    <img src={searchIcon} alt="" className="" />
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="text"
                        className="outline-none bg-[inherit] text-primaryText w-[60%] placeholder:text-[17px]"
                        placeholder="Search for movies or TV series"
                    />
                </div>
            </div>

            {searchValue.length > 0 && (
                <div className="mt-[20px]">
                    <MovieList
                        heading={`Found ${searctList.length} results for '${searchValue}'`}
                        data={searctList}
                    />
                </div>)}
        </>
    );
}

export default SearchinBar;
