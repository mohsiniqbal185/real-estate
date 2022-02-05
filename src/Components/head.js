import React, {useEffect, useState} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {IsUserLoggedIn} from './authenticated.js'
import {GET, request, StatusOK} from "./request_helper";

const getUserProfileData = async () => {
    if (!IsUserLoggedIn) {
        return {}
    }
    let response = await request(GET, "/user/profile", null)

    if (response.status === StatusOK) {
        return response.json();
    }
    return {}
}


const logout = async (e) => {
    e.preventDefault()
    console.log("logged out")
    let response = await request(GET, "/logout", null)

    if (response.status === StatusOK) {
        window.location.reload(false);
        localStorage.clear();
    } else {
        alert("Failed to logout")
    }

}

const renderUserInfo = (profile) => {
    let data = [];
    if (profile.user) {
        data.push(<li className="nav-item dropdown d-inline-block">
            <a className="nav-link dropdown-toggle" style={{color: "black"}} href="#"
               id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false">{`Welcome ${profile.firstname}`}</a>
            <div className="dropdown-menu">
                <a href={"/myads"} className="dropdown-item">View my ads</a>
                <a className="dropdown-item" onClick={logout}>Logout</a>
            </div>
        </li>);
    }
    return data;
}
const Head = () => {
    const [profile, setProfile] = useState({})
    useEffect(() => {
        getUserProfileData().then(data => {
            setProfile(data);
        })
    }, []);
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a className="navbar-brand"><Link to='/home'>Online Real Estate </Link><span
                            style={{color: 'green',}}>Market</span></a>
                    </li>

                    <li>
                        <a className="home"><Link to='/home'>Home</Link></a>
                    </li>
                    <li>
                        <a className="search"><Link to='/search'>Search</Link></a>
                    </li>
                    <li className="nav-item dropdown d-inline-block">
                        <a className="nav-link dropdown-toggle" style={{color: 'black'}} href="#"
                           id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false">View Properties</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item "><Link to='/propforrent'>Properties for rent</Link></a>
                            <a className="dropdown-item "><Link to='/propforsale'>Properties for sale</Link></a>
                        </div>
                    </li>

                    <li style={IsUserLoggedIn() ? {display: "none"} : {}}>
                        <a className="login"><Link to='/login'>Login</Link></a>
                    </li>
                    <li>
                        <a className="ap"><Link to='/addproperty'>Add Property</Link></a>
                    </li>
                    {renderUserInfo(profile)}

                </ul>
            </nav>
        </div>
    )
        ;
}

export default Head;