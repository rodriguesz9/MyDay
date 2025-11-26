import React, { useState } from 'react';
import './ProfileModal.css';

function ProfileModal({ profile, onClose, onSave }) {
  const [formData, setFormData] = useState(profile);
  const [selectedEmoji, setSelectedEmoji] = useState(profile.avatar);

  const emojis = ['👨‍💻', '👩‍💻', '🧑‍💼', '👨‍🎨', '👩‍🎨', '🦸', '🦹', '🧙', '🧑‍🚀', '🤖', '😎', '🎭'];

  const handleSubmit = () => {
    onSave({ ...formData, avatar: selectedEmoji });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Editar Perfil</h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-form">
          <div className="profile-avatar-section">
            <div className="profile-avatar-large">{selectedEmoji}</div>
            <div className="emoji-picker">
              {emojis.map(emoji => (
                <button
                  key={emoji}
                  className={`emoji-option ${selectedEmoji === emoji ? 'selected' : ''}`}
                  onClick={() => setSelectedEmoji(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              className="form-textarea"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Tema</label>
            <div className="theme-options">
              <button
                className={`theme-option ${formData.theme === 'light' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, theme: 'light'})}
              >
                ☀️ Claro
              </button>
              <button
                className={`theme-option ${formData.theme === 'dark' ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, theme: 'dark'})}
              >
                🌙 Escuro
              </button>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn-primary" onClick={handleSubmit}>
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;