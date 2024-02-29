import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
// import Login from './components/Login'
import SearchinBar from "./components/SearchinBar";
import MovieList from "./components/home/MovieList";

interface Props {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRegistrired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Root({ isLoggedIn }: Props) {
    const location = useLocation();
    console.log(location.pathname);
    const navigation = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigation("/");
        } else {
            navigation("/auth");
        }
    }, [isLoggedIn, navigation]);

    return (
        <div className={`${location.pathname == "/auth" ? 'xl:flex xl:items-center xl:justify-center' : "xl:grid"}  100px grid-cols-custom xl:gap-[50px]  xl:px-[2.5%]`}>
            {location.pathname !== "/auth" && (
                <div>
                    <Header />{" "}
                </div>
            )}
            <div >
                {location.pathname !== "/auth" && (
                    <div>
                        <SearchinBar />{" "}
                    </div>
                )}
                <Outlet />
            </div>

            {/* {location.pathname !== "/auth" && <><MovieList /> </>} */}
        </div>
    );
}

export default Root;
