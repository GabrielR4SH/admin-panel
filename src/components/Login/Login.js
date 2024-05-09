import React, { useState } from 'react';
import { Container, TextField, Button, Modal, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Crie uma instância de navigate

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            
            localStorage.setItem('token', data.token); // Armazena o token no localStorage
            
            navigate('/admin'); // Redireciona para o AdminPanel
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    

    return (
        <Container maxWidth="sm">
            <div style={{ padding: '5px' }}>
                <div style={{ backgroundImage: `url('https://www.andersonfotografo.com/wp-content/uploads/2023/03/construcao-civil-predios-imobiliarios-drone.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '25px', padding: '5px',opacity:'0.9' }}>
                    <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginBottom:'10%' }}>
                        <h2>Login</h2>
                        <TextField label="Username" variant="outlined" style={{ marginBottom: '20px', width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
                        <TextField label="Password" type="password" variant="outlined" style={{ marginBottom: '20px', width: '100%' }} onChange={(e) => setPassword(e.target.value)} />
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                        <p style={{ marginTop: '20px' }}>Não tem uma conta? <a href="#" onClick={handleOpen}>Cadastrar</a></p>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', width: '300px', margin: 'auto', marginTop: '100px' }}>
                        <h2>Cadastrar</h2>
                        <TextField label="Nome" variant="outlined" style={{ marginBottom: '10px', width: '100%' }} />
                        <TextField label="Empresa" variant="outlined" style={{ marginBottom: '10px', width: '100%' }} />
                        <TextField label="Email" variant="outlined" style={{ marginBottom: '10px', width: '100%' }} />
                        <TextField label="Senha" type="password" variant="outlined" style={{ marginBottom: '10px', width: '100%' }} />
                        <TextField label="Confirma senha" type="password" variant="outlined" style={{ marginBottom: '20px', width: '100%' }} />
                        <Button variant="contained" color="primary">Cadastrar</Button>
                    </div>
                </Fade>
            </Modal>
        </Container>
    );
}

export default Login;
