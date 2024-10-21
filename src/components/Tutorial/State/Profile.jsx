import { useState } from "react";

const Profile = () => {
	const [userInformation, setUserInformation] = useState({
		name: "",
		age: "",
	});
	return (
        <div>
            <div>
                <h4>Name : {userInformation.name}</h4>
                <p>Age : {userInformation.age}</p>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="name" onChange= {(e) => setUserInformation((datauser) => ({...datauser, name: e.target.value}))}/>
                </div>

                <div>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="age" onChange={(e) => setUserInformation((dataUser) => ({...dataUser, age: e.target.value}))}/>
                </div>
            </form>
        </div>
    )
};

export default Profile;
