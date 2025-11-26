import React from 'react';
import './Tutorial.css';

function Tutorial({ step, onNext, onSkip }) {
  const tutorialSteps = [
    {
      title: 'Bem-vindo ao TaskHub! 🎉',
      description: 'Vamos fazer um tour rápido pelas principais funcionalidades.',
      position: 'center'
    },
    {
      title: 'Filtros de Tarefas',
      description: 'Use a barra lateral para filtrar suas tarefas por status: A Fazer, Em Progresso ou Concluídas.',
      position: 'left',
      highlight: '.sidebar'
    },
    {
      title: 'Criar Nova Tarefa',
      description: 'Clique no botão "Nova Tarefa" para adicionar uma nova tarefa ao seu projeto.',
      position: 'top-right',
      highlight: '.btn-primary'
    },
    {
      title: 'Gerenciar Tarefas',
      description: 'Clique no ícone de edição para modificar uma tarefa ou no ícone de lixeira para excluir.',
      position: 'center',
      highlight: '.task-card'
    },
    {
      title: 'Personalize seu Perfil',
      description: 'Clique no seu avatar para editar perfil e alternar entre tema claro e escuro.',
      position: 'top-right',
      highlight: '.profile-avatar'
    }
  ];

  const currentStep = tutorialSteps[step];

  return (
    <>
      <div className="tutorial-overlay" onClick={onSkip} />
      <div className={`tutorial-card tutorial-${currentStep.position}`}>
        <div className="tutorial-header">
          <h3>{currentStep.title}</h3>
          <button className="tutorial-close" onClick={onSkip}>✕</button>
        </div>
        <p className="tutorial-description">{currentStep.description}</p>
        <div className="tutorial-footer">
          <span className="tutorial-progress">{step + 1} de {tutorialSteps.length}</span>
          <div className="tutorial-actions">
            <button className="tutorial-btn-skip" onClick={onSkip}>Pular</button>
            <button className="tutorial-btn-next" onClick={onNext}>
              {step === tutorialSteps.length - 1 ? 'Começar' : 'Próximo'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial;