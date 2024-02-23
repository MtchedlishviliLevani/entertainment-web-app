import data from "../../data.json"



function Trending() {
    const trending = data.movies.filter(element => element.isTrending);
    // console.log(trending[0].thumbnail.trending?.large.);
    console.log(trending.map(value => value.thumbnail.trending?.large))


    return (
        <>
            <h2 className="text-[20px] text-primaryText uppercase">trending</h2>
            <div className=" mt-[25px]">
                <div
                    className="flex  min-w-[1280px] gap-[20px] " >
                    {trending.map((value, i) => <div
                        style={{ '--image-url': `url(${value.thumbnail.trending?.small})`, '--image-url-big': `url(${value.thumbnail.trending?.large})` } as React.CSSProperties}
                        className='w-[240px] relative bg-[contain] rounded-[8px]  h-[140px] bg-[image:var(--image-url)] md:bg-[image:var(--image-url-big)] md:h-[400px]'
                        key={i}>
                        <div className="w-[32px] flex justify-center items-center h-[32px] rounded-[50%] bg-greilishBlue absolute top-[10px] left-[200px]">
                            <svg className="cursor-pointer" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill={value.isBookmarked ? "#fff" : "none"} /></svg>
                        </div>
                        <div className="absolute top-[67px] left-[15px]">
                            <div className="flex items-center gap-[10px] w-[190px]">
                                <div className="flex items-center gap-[10px]">
                                    <span className="mr-[10px] text-primaryText after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[40px] after:bg-[#FFF] ">{value.year}</span>
                                    <div className="flex items-center gap-2 ">
                                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#FFF" /></svg>
                                        <span className="text-primaryText">{value.category}</span></div>
                                </div>
                                <span className="ml-[13px] text-primaryText after:content-[''] relative after:w-[4px] after:h-[4px] after:rounded-[50px] after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-[-10px] after:bg-[#FFF] ">{value.rating}</span>


                            </div>
                            <h3 className="text-primaryText mt-[6px]">{value.title}</h3>
                        </div>
                    </div>

                    )}

                </div ></div ></>
    )
}

export default Trending
