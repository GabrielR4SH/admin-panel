import React from 'react';

const AdminPanel = ({ isAuthenticated, username }) => {
    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1>Bem-vindo, {username}!</h1>
                    {/* Outros conteúdos do painel de administração aqui */}
                </div>
            ) : (
                <h1>Você não está autenticado.</h1>
            )}
        </div>
    );
}

export default AdminPanel;
