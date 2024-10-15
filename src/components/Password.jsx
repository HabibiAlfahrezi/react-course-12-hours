import React from "react";

const Password = ({ isValid }) => {
    const ValidPassword = <h1>Valid Password</h1>;
    const InValidPassword = <h1>Invalid Password</h1>;
	return isValid ? ValidPassword  : InValidPassword ;
};

export default Password;
