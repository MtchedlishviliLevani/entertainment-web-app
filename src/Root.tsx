import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Root({ isLoggedIn }: { isLoggedIn: boolean }) {
    const location = useLocation();

    const navigation = useNavigate()
    console.log(location.pathname);
    useEffect(() => {
        if (isLoggedIn) {
            navigation("/")
        } else {
            navigation("/auth")
        }
    }, [isLoggedIn, navigation])

    return (
        <div>
            {isLoggedIn ? <h1>Hello WOrld</h1> : null}
            {/* <h1>Hello World</h1> */}
            <Outlet />
        </div>
    )
}

export default Root
