import React, { useState } from 'react';
import './TaskModal.css';

function TaskModal({ task, onClose, onSave }) {
  const [formData, setFormData] = useState(task || {
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    assignee: '',
    labels: []
  });

  const handleSubmit = () => {
    if (formData.title.trim()) {
      onSave(formData);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{task ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-form">
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="form-input"
              placeholder="Digite o título da tarefa..."
            />
          </div>

          <div className="form-group">
            <label>Descrição</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="form-textarea"
              rows="4"
              placeholder="Adicione uma descrição..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="form-select"
              >
                <option value="todo">A Fazer</option>
                <option value="in-progress">Em Progresso</option>
                <option value="done">Concluída</option>
              </select>
            </div>

            <div className="form-group">
              <label>Prioridade</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
                className="form-select"
              >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Responsável</label>
            <input
              type="text"
              value={formData.assignee}
              onChange={(e) => setFormData({...formData, assignee: e.target.value})}
              className="form-input"
              placeholder="Nome do responsável..."
            />
          </div>

          <div className="modal-footer">
            <button className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn-primary" onClick={handleSubmit}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;