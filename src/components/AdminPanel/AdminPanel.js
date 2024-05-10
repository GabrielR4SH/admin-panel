import React from 'react';
import './AdminPanel.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';

const AdminPanel = ({ isAuthenticated, username }) => {
    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <Header username={username} />
                    <SideNav username={username}/>
                    <Home />
                    
                </div>
            ) : (
                <h1>Você não está autenticado.</h1>
            )}
        </div>
    );
}

export default AdminPanel;
