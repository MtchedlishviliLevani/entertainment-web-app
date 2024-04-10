import useMyContext from "../../hooks/useMyContext";
import { motion } from "framer-motion"
function Trending() {
    const data = useMyContext();

    const handleBookmarkClick = (id: number) => {
        data?.setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id
                    ? { ...movie, isBookmarked: !movie.isBookmarked }
                    : movie
            )
        );
    };
    const trendingData = data?.movies.filter((element) => element.isTrending);

    return (
        <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}

            className="pl-[5%] xl:pl-0">
            <h2 className="text-[20px] text-primaryText uppercase">trending</h2>
            <div className=" mt-[25px] w-[calc(100vw-2.5%)]  relative">
                <div className="flex overflow-x-auto gap-[20px] h-[170px] md:h-[265px]">


                    {trendingData?.map((value) => (
                        <div key={value.id}>
                            <div
                                style={
                                    {
                                        "--image-url": `url(${value.thumbnail.trending?.small})`,
                                        "--image-url-big": `url(${value.thumbnail.trending?.large})`,
                                    } as React.CSSProperties
                                }
                                className="w-[240px] group cursor-pointer  bg-no-repeat md:w-[470px]  relative bg-[contain] rounded-[8px]  h-[140px] md:h-[230px] bg-[image:var(--image-url)] md:bg-[image:var(--image-url-big)] "
                                key={value.id}
                            >
                                <div
                                    className="absolute lg:group-hover:visible invisible  z-50  gap-[14px] items-center flex w-[117px] h-[48px] rounded-[10px]     top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
                                    <div className="w-[100%] h-[100%]  bg-[#ffffff40]  absolute rounded-[10px]"></div>
                                    <svg
                                        className="ml-[15px]"
                                        width="30"
                                        height="30"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                                            fill="#FFF"
                                        />
                                    </svg>
                                    <span className="text-primaryText">Play</span>
                                </div>
                                <div
                                    className="w-[100%] h-[100%] opacity-50 lg:group-hover:visible   invisible absolute     bg-[#000]"></div>
                                <div className="w-[32px] md:w-[40px] flex justify-center items-center h-[32px] md:h-[40px] rounded-[50%] bg-[#00000050] absolute top-[10px] md:top-[20px] left-[200px] md:left-[410px]">
                                    <svg
                                        onClick={() => handleBookmarkClick(value.id)}
                                        className="cursor-pointer"
                                        width="12"
                                        height="14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                                            stroke={"#fff"}
                                            strokeWidth="1.5"
                                            fill={value.isBookmarked ? "#fff" : "#00000050"}
                                        />
                                    </svg>
                                </div>

                                <div className="absolute  top-[75px] md:top-[157px] left-[15px] md:left-[30px]">
                                    <div className="flex items-center gap-[10px] w-[200px]">
                                        <div className="flex items-center gap-[10px]">
                                            <span className="mr-[10px] text-primaryText after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[40px] after:bg-[#FFF] ">
                                                {value.year}
                                            </span>
                                            <div className="flex items-center gap-2 ">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                                                        fill="#FFF"
                                                    />
                                                </svg>
                                                <span className="text-primaryText">
                                                    {value.category}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="ml-[13px] text-primaryText after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[-10px] after:bg-[#FFF] ">
                                            {value.rating}
                                        </span>
                                    </div>
                                    <h3 className="text-primaryText mt-[3px] md:mt-[initial] md:text-[28px] ">
                                        {value.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div >
    );
}

export default Trending;
