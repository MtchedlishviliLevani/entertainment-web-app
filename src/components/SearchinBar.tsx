import React from "react";
import searchIcon from "../assets/images/icon-search.svg";

function SearchinBar() {
    return (
        <div className="container">
            <div className="flex items-center gap-[20px] mt-[20px]">
                <img src={searchIcon} alt="" className="" />
                <input
                    type="text"
                    className="outline-none bg-[inherit] text-primaryText w-[60%] placeholder:text-[17px]"
                    placeholder="Search for movies or TV series"
                />


            </div>
        </div>
    );
}

export default SearchinBar;
