import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Root() {
    const location = useLocation();
    const navigation = useNavigate()
    console.log(location.pathname);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if (!isLoggedIn) {
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
