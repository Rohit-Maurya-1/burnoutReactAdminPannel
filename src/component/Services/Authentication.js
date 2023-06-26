import { Outlet, Navigate} from 'react-router-dom'

export default function PrivateRoutes() {
    let  auth = localStorage.getItem("Token") == null ? false : true;
    return (
        <>
            {auth ? <Outlet/> : <Navigate to="/" />};
        </>

    )

}