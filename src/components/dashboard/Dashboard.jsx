import React, { useEffect } from 'react'
import Header from '../header/Header'
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    const history = useHistory();

    useEffect(() => {
       let res = localStorage.getItem("token")
       if(res === null) history.push("/sign-in")
    }, [])

    return (
        <div className="container-fluid d-flex flex-column p-0">
            <Header/>
        </div>
    )
}
