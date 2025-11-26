import React from 'react';
import './SplashScreen.css';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <div className="splash-icon">✓</div>
          <h1 className="splash-title">MyDay</h1>
        </div>
        <p className="splash-subtitle">Organize suas tarefas com eficiência</p>
        <div className="splash-loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;