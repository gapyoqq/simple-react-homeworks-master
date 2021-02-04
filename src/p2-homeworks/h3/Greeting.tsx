import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={error? s.error : ''}/>
            <button onClick={addUser}>add</button>
            {error && <div className={s.errorMessage}>{error}</div> }
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
