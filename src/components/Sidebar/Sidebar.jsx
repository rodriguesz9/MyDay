import React from 'react';
import './Sidebar.css';

function Sidebar({ currentFilter, onFilterChange, tasksCount }) {
  const filters = [
    { id: 'all', label: 'Todas', icon: '📋', count: tasksCount.all },
    { id: 'todo', label: 'A Fazer', icon: '⭕', count: tasksCount.todo },
    { id: 'in-progress', label: 'Em Progresso', icon: '🔄', count: tasksCount.inProgress },
    { id: 'done', label: 'Concluídas', icon: '✅', count: tasksCount.done }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`nav-item ${currentFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            <span className="nav-icon">{filter.icon}</span>
            <span className="nav-label">{filter.label}</span>
            <span className="nav-count">{filter.count}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;