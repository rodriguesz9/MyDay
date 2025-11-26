import React from 'react';
import './TaskCard.css';

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const priorityColors = {
    high: '#cf222e',
    medium: '#fb8500',
    low: '#1a7f37'
  };

  return (
    <div className="task-card">
      <div className="task-card-header">
        <input
          type="checkbox"
          checked={task.status === 'done'}
          onChange={(e) => onStatusChange(e.target.checked ? 'done' : 'todo')}
          className="task-checkbox"
        />
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button className="btn-icon" onClick={onEdit}>✏️</button>
          <button className="btn-icon" onClick={onDelete}>🗑️</button>
        </div>
      </div>
      
      <p className="task-description">{task.description}</p>
      
      <div className="task-meta">
        <div className="task-labels">
          {task.labels && task.labels.map((label, index) => (
            <span key={index} className="task-label">{label}</span>
          ))}
        </div>
        <div className="task-info">
          <span 
            className="task-priority"
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢'}
          </span>
          <span className="task-assignee">{task.assignee}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;