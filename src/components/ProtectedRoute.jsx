import {Navigate} from "react-router-dom"
import { useEffect, useState } from "react"
import { getHomePageData } from "../Api/Api.js"

const ProtectedRoute = ({children}) => {
    const[auth, setAuth] = useState(null);

    useEffect(()=>{
        const checkAuth = async()=>{
            try {
                const res = await getHomePageData();
                if(res.status === 200){
                    setAuth(true);
                }
            } catch (error) {
                console.log(error)
                setAuth(false)
            }
        };
        checkAuth()
    }, [])

    if(auth===null) return <p>Loading....</p>
    return auth ? children : <Navigate to="/login" replace />

}

export default ProtectedRoute