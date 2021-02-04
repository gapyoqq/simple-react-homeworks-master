import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (props: GreetingContainerPropsType) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setName(e.currentTarget.value);
    };
    const addUser = () => {
        if (name.trim() !== '') {
            setError(null)
            props.addUserCallback(name)
            setName('')
        } else {
            setError('name is required')
        }

    };

    const totalUsers = props.users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
