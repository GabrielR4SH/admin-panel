import React, {useState,useEffect} from "react";

const AdminPanel = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:5000/api/user', {
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include',
                });
                const content = await response.json();
                setName(content.name)
            }
        )();
    });

    return(
        <div>
            <h1>{name}</h1>
        </div>
    );
};