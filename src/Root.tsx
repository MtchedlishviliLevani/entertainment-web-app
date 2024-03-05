import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchinBar from "./components/SearchinBar";

interface Props {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRegistrired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Root({ isLoggedIn }: Props) {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        } else {
            navigate("/auth");
        }
    }, [isLoggedIn, navigate]);

    const [searchValue, setSearchValue] = useState("");

    return (
        <div
            className={`${location.pathname == "/auth"
                ? "xl:flex xl:items-center xl:justify-center"
                : "xl:grid"
                } overflow-x-[hidden]  100px grid-cols-custom xl:gap-[50px]  xl:px-[2.5%]`}
        >
            {location.pathname !== "/auth" && (
                <div>
                    <Header />{" "}
                </div>
            )}
            <div>
                {location.pathname !== "/auth" && (
                    <div>
                        <SearchinBar
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                    </div>
                )}
                {searchValue.length > 0 ? null : <Outlet />}
            </div>
        </div>
    );
}

export default Root;
