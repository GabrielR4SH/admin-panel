import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button } from '@material-ui/core';
import AdminPanel from '../AdminPanel/AdminPanel';

const Login = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setToken(response.data.token);
            setUsername(response.data.username);

        } catch (error) {
            setError('Erro ao fazer login. Verifique seu email e senha.');
        }
    }

    return (
        <div>
            {token ? (
                <AdminPanel isAuthenticated={true} username={username} />
            ) : (
                <Container maxWidth="md">
                <h1 style={{textAlign:'center'}}>Gerenciador Administrativo</h1>
                    <div style={{ padding: '5px' }}>
                        <div style={{ backgroundImage: `url('https://www.andersonfotografo.com/wp-content/uploads/2023/03/construcao-civil-predios-imobiliarios-drone.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '25px', padding: '5px',opacity:'0.9' }}>
                            <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginBottom:'10%' }}>
                                <h2>Login</h2>
                                <TextField label="Username" variant="outlined" style={{ marginBottom: '20px', width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
                                <TextField label="Password" type="password" variant="outlined" style={{ marginBottom: '20px', width: '100%' }} onChange={(e) => setPassword(e.target.value)} />
                                <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                                {error && <p>{error}</p>}
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </div>
    );
}

export default Login;
