import { getUserLocalStorage } from "../../utils/userLocalStorge";
import { Link } from "react-router-dom";

export const MyProfile = () => {
    const user = getUserLocalStorage();

    return(
        <div>
            <h1>Mi Perfil</h1>
        </div>
    )
}