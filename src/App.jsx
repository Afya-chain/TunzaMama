// src/App.jsx
import React, { useState } from 'react';
import ProgressTracker from './components/dashboard/ProgressTracker';
import QuickActions from './components/dashboard/QuickActions';
import VitalsGrid from './components/dashboard/VitalsGrid';
import { WeeklyGuide } from './components/pregnancy-guide/index.js';
import { HealthRecordsContainer } from './components/health-records/index.js';
import { CommunityContainer } from './components/community/index.js';
import { EducationContainer } from './components/education/index.js';
import { EmergencyContainer } from './components/emergency/index.js';
import { AlertCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageSelector from './components/shared/LanguageSelector';

const Navigation = ({ activePage, setActivePage }) => {
  const { t } = useLanguage();
  const navItems = [
    { id: 'dashboard', label: t('common.dashboard') },
    { id: 'pregnancy-guide', label: t('common.pregnancyGuide') },
    { id: 'health-records', label: t('common.healthRecords') },
    { id: 'education', label: t('common.education') },
    { id: 'community', label: t('common.community') }
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-4 py-4 font-medium relative ${
                  activePage === item.id
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setActivePage('emergency')}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <AlertCircle className="w-5 h-5 mr-2" />
              {t('common.emergency')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-purple-600">TunzaMama</div>
        <LanguageSelector />
      </div>
    </header>
  );
};

const Dashboard = () => (
  <>
    <ProgressTracker />
    <QuickActions />
    <VitalsGrid />
  </>
);

const App = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const { t } = useLanguage();

  const getPageTitle = () => {
    const titles = {
      dashboard: t('common.welcomeBack', { name: 'Sarah' }),
      'pregnancy-guide': t('common.pregnancyJourneyTitle'),
      'health-records': t('common.healthRecords'),
      education: t('common.educationHub'),
      community: t('common.communityTitle'),
      emergency: t('common.emergencyServices')
    };
    return titles[activePage] || t('common.welcomeBack', { name: 'Sarah' });
  };

  const getPageSubtitle = () => {
    const subtitles = {
      dashboard: t('common.weekOfJourney', { week: '24' }),
      'pregnancy-guide': t('common.trackProgress'),
      'health-records': t('common.monitorHealth'),
      education: t('common.learnAboutPregnancy'),
      community: t('common.connectWithMoms'),
      emergency: t('common.quickAccess')
    };
    return subtitles[activePage] || t('common.weekOfJourney', { week: '24' });
  };

  const getHeroBackground = () => {
    if (activePage === 'emergency') {
      return 'bg-gradient-to-r from-red-500 to-red-600';
    }
    return 'bg-gradient-to-r from-purple-500 to-pink-500';
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'pregnancy-guide':
        return <WeeklyGuide />;
      case 'health-records':
        return <HealthRecordsContainer />;
      case 'education':
        return <EducationContainer />;
      case 'community':
        return <CommunityContainer />;
      case 'emergency':
        return <EmergencyContainer />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      {/* Hero Section */}
      <div className={`${getHeroBackground()} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">{getPageTitle()}</h1>
          <p className="text-xl opacity-90">{getPageSubtitle()}</p>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">
            © 2024 TunzaMama. {t('common.allRightsReserved')}
          </p>
        </div>
      </footer>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};

export default AppWrapper;