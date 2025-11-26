import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import TaskBoard from './components/TaskBoard/TaskBoard';
import ProfileModal from './components/ProfileModal/ProfileModal';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/Footer/Footer';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Implementar autenticação',
      description: 'Adicionar login com OAuth',
      status: 'todo',
      priority: 'high',
      assignee: 'Robert Rodrigues',
      labels: ['backend', 'security']
    },
    {
      id: 2,
      title: 'Design do dashboard',
      description: 'Criar protótipo no Figma',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Matheus Brito',
      labels: ['design', 'ui']
    }
  ]);

  const [profile, setProfile] = useState({
    name: 'Dev Master',
    username: '@devmaster',
    avatar: '👨‍💻',
    bio: 'Full Stack Developer',
    theme: 'dark'
  });

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [showSplash, setShowSplash] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
      if (!hasSeenTutorial) {
        setShowTutorial(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleTutorialNext = () => {
    if (tutorialStep < 4) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem('hasSeenTutorial', 'true');
    }
  };

  const handleSkipTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('hasSeenTutorial', 'true');
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`app ${profile.theme}`}>
      <Header 
        profile={profile} 
        onOpenProfile={() => setShowProfileModal(true)}
      />
      
      <div className="app-container">
        <Sidebar 
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          tasksCount={{
            all: tasks.length,
            todo: tasks.filter(t => t.status === 'todo').length,
            inProgress: tasks.filter(t => t.status === 'in-progress').length,
            done: tasks.filter(t => t.status === 'done').length
          }}
        />
        
        <TaskBoard 
          tasks={tasks}
          currentFilter={currentFilter}
          onAddTask={addTask}
          onUpdateTask={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>

      {showProfileModal && (
        <ProfileModal
          profile={profile}
          onClose={() => setShowProfileModal(false)}
          onSave={updateProfile}
        />
      )}

      {showTutorial && (
        <Tutorial 
          step={tutorialStep}
          onNext={handleTutorialNext}
          onSkip={handleSkipTutorial}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;