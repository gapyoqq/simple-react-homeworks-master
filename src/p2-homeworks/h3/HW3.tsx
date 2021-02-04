import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";


export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        let newUser = {_id:v1(),name}
        setUsers([newUser,...users])
    }

    return (
        <div>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default HW3;
