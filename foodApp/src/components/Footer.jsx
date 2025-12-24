import {Link} from "react-router-dom";
import {UserContext} from "../utils/example.jsx";
import {useContext} from "react";

function Footer(){
    const {user, setUser} = useContext(UserContext);
    return(
        <div className="w-full">
            <ul className="flex flex-row gap-4 py-4 px-4 border-2 bottom-0 right-0">
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>* Know Us</li>
                <li>* Test</li>
                <li>{user}</li>
            </ul>
        </div>
    )
}

export default Footer