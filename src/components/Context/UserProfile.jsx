import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
	const {user} = useContext(UserContext);
	return (
        <div>
            <h4>{user.name}</h4>
            <p>{user.age}</p>
        </div>
    );
};

export default UserProfile;
