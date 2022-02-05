import React, {useState} from "react";
import {GET, request, StatusOK} from "./request_helper";


const IsUserLoggedIn = () => {
    return !!localStorage.getItem('user')
}

class Authenticated extends React.Component {
    componentDidMount() {
        request(GET, "/user/profile", null).then((response) => {
            if (response.status !== StatusOK) {
                window.location.href = `/login?redirect=${window.location.pathname}`
            }
        })

    }

    render() {
        return null;
    }
}

export default Authenticated
export {IsUserLoggedIn}