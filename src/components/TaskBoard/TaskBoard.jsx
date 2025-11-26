import React, { useState } from 'react';
import './TaskBoard.css';
import TaskCard from '../TaskCard/TaskCard';
import TaskModal from '../TaskModal/TaskModal';

function TaskBoard({ tasks, currentFilter, onAddTask, onUpdateTask, onDeleteTask }) {
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = currentFilter === 'all' 
    ? tasks 
    : tasks.filter(task => task.status === currentFilter);

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleSave = (taskData) => {
    if (editingTask) {
      onUpdateTask(editingTask.id, taskData);
    } else {
      onAddTask(taskData);
    }
    setShowModal(false);
    setEditingTask(null);
  };

  return (
    <main className="task-board">
      <div className="board-header">
        <h1 className="board-title">
          {currentFilter === 'all' ? 'Todas as Tarefas' : 
           currentFilter === 'todo' ? 'A Fazer' :
           currentFilter === 'in-progress' ? 'Em Progresso' : 'Concluídas'}
        </h1>
        <button 
          className="btn-primary"
          onClick={() => {
            setEditingTask(null);
            setShowModal(true);
          }}
        >
          Nova Tarefa
        </button>
      </div>

      <div className="tasks-list">
        {filteredTasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={() => handleEdit(task)}
            onDelete={() => onDeleteTask(task.id)}
            onStatusChange={(status) => onUpdateTask(task.id, { status })}
          />
        ))}
        {filteredTasks.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>Nenhuma tarefa encontrada</p>
          </div>
        )}
      </div>

      {showModal && (
        <TaskModal
          task={editingTask}
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
          onSave={handleSave}
        />
      )}
    </main>
  );
}

export default TaskBoard;