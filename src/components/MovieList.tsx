import useMyContext from "../hooks/useMyContext";

function MovieList({ heading, data }: Props) {
    const context = useMyContext()

    const handleBookmarkClick = (id: number) => {
        context?.setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
            )
        );
    };


    return (
        <div className="container xl:px-[0%]">
            <h2 className='text-primaryText text-[20px] md:text-[32px] md:leading-[40px]'>{heading}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[10px] sm:gap-[20px] md:gap-[3%] gap-y-[25px] 2xl:gap-[30px] mt-[20px] '>
                {data?.map((value) => (
                    <div key={value.id}>
                        <div className='relative group'>
                            <picture>
                                <source srcSet={value.thumbnail.regular.large} media="(min-width: 1000px)" />
                                <source srcSet={value.thumbnail.regular.medium} media="(min-width: 600px)" />
                                <img src={value.thumbnail.regular.small} alt="" className='rounded-[8px] group ' />
                                <div className="w-[100%] h-[100%] opacity-50 lg:group-hover:visible invisible top-0 absolute z-10 bg-[#000]"></div>
                            </picture>
                            <div className="absolute  z-50 gap-[14px] lg:group-hover:visible invisible items-center flex w-[117px] h-[48px] rounded-[10px] top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%]">
                                <div className="w-[100%] h-[100%] z-50 bg-[#ffffff40] absolute rounded-[10px]"></div>
                                <svg className="ml-[15px]" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF" /></svg>
                                <span className="text-primaryText">Play</span>


                            </div>
                            <div className="w-[32px] md:w-[40px] flex justify-center items-center h-[32px] md:h-[40px] rounded-[50%] z-10 bg-[#00000050]  absolute top-[10px] right-[10px] ">
                                <svg onClick={() => handleBookmarkClick(value.id)} className="cursor-pointer" width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill={value.isBookmarked ? "#fff" : "none"} />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center gap-[10px] w-[100%] mt-[12px] mb-[4px]">
                            <div className="flex items-center gap-[10px]">
                                <span className="mr-[10px] text-primaryText opacity-80 text-[11px] md:text-[13px] after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[35px] after:bg-[#FFF] ">{value.year}</span>
                                <div className="flex items-center gap-2 ">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                        <path className="opacity-80" d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#FFF" />
                                    </svg>
                                    <span className="text-primaryText opacity-80 text-[11px] md:text-[13px] font-outfit">{value.category}</span>
                                </div>
                            </div>
                            <span className="ml-[10px] text-[11px] md:text-[13px] opacity-80 text-primaryText after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[-10px] after:bg-[#FFF] ">{value.rating}</span>
                        </div>
                        <h4 className='text-primaryText font-bold text-[14px] md:text-[18px] md:mt-[5px]'>{value.title}</h4>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default MovieList
