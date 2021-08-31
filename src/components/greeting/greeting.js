import React from "react";

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Ek',
    lastName: 'R'
};

const Element = () =>{
    return(
        <h1>hello {formatName(user)}!</h1>
    );
};
export default Element;