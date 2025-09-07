
import React, { useState, useMemo } from 'react';
import Sidebar from './components/layout/Sidebar';
import PageHeader from './components/layout/PageHeader';
import ChatInterface from './components/ChatInterface';
import ImageAnalyzer from './components/ImageAnalyzer';
import QuizGenerator from './components/QuizGenerator';
import ImageGenerator from './components/ImageGenerator';
import FlashcardGenerator from './components/FlashcardGenerator';
import StudyPlanner from './components/StudyPlanner';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import { ActiveTab, pageTitles } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Chat);
  const [appLaunched, setAppLaunched] = useState(false);

  const pageTitle = useMemo(() => pageTitles[activeTab], [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case ActiveTab.Dashboard:
        return <Dashboard />;
      case ActiveTab.Image:
        return <ImageAnalyzer />;
      case ActiveTab.ImageGeneration:
        return <ImageGenerator />;
      case ActiveTab.Quiz:
        return <QuizGenerator />;
      case ActiveTab.Flashcards:
        return <FlashcardGenerator />;
      case ActiveTab.StudyPlanner:
        return <StudyPlanner />;
      case ActiveTab.Chat:
      default:
        return <ChatInterface />;
    }
  };

  if (!appLaunched) {
    return <LandingPage onLaunch={() => setAppLaunched(true)} />;
  }

  return (
    <div className="flex h-screen bg-[#F8F7FA] text-gray-800 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <PageHeader title={pageTitle} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
