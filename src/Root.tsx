import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
// import Login from './components/Login'
import SearchinBar from './components/SearchinBar';

interface Props {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsRegistrired: React.Dispatch<React.SetStateAction<boolean>>
}

function Root({ isLoggedIn }: Props) {
    const location = useLocation();
    console.log(location.pathname)
    const navigation = useNavigate()
    useEffect(() => {
        if (isLoggedIn) {
            navigation("/")
        } else {
            navigation("/auth")
        }
    }, [isLoggedIn, navigation])

    return (
        <div>

            {location.pathname === "/auth" ? null : <><Header /> <SearchinBar /></>}
            <Outlet />
        </div>
    )
}

export default Root
