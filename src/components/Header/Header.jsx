import React, { useState } from 'react';
import './Header.css';

function Header({ profile, onOpenProfile }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">✓</span>
          <span className="logo-text">MyDay</span>
        </div>
        <div className={`search-container ${showSearch ? 'active' : ''}`}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Buscar tarefas..."
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      
      <nav className="header-nav">
        <button className="nav-link active">
          <span className="nav-icon">📋</span>
          <span className="nav-text">Tarefas</span>
        </button>
        
      </nav>
      
      <div className="header-right">
        <button className="icon-button" title="Notificações">
          <span>🔔</span>
          <span className="notification-badge">3</span>
        </button>
        <button className="icon-button" title="Nova tarefa">
          <span>➕</span>
        </button>
        <div className="profile-avatar" onClick={onOpenProfile} title="Perfil">
          <span className="avatar-emoji">{profile.avatar}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;