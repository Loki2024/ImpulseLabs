import React, { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import { View, UserSettings } from './types';
import Login from './views/Login';
import Signup from './views/Signup';
import OnboardingBirthday from './views/OnboardingBirthday';
import OnboardingGoals from './views/OnboardingGoals';
import OnboardingIncome from './views/OnboardingIncome';
import Dashboard from './views/Dashboard';
import Envelopes from './views/Envelopes';
import AddPurchase from './views/AddPurchase';
import Settings from './views/Settings';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);
  
  // User Data State
  const [userSettings, setUserSettings] = useState<UserSettings>({
    currency: '$',
    hourlyMode: false,
    hourlyRate: 25,
    yearlySalary: 52000,
    investmentReturnRate: 10,
    retirementAge: 65,
    birthday: '2004-01-01',
    incomeMode: 'salary'
  });

  // Derived state or shared logic could go here

  const renderView = () => {
    switch (currentView) {
      case View.LOGIN:
        return <Login 
          onLogin={() => setCurrentView(View.ONBOARDING_BIRTHDAY)} 
          onSignup={() => setCurrentView(View.SIGNUP)}
        />;
      case View.SIGNUP:
        return <Signup 
          onSignup={() => setCurrentView(View.ONBOARDING_BIRTHDAY)}
          onBack={() => setCurrentView(View.LOGIN)}
        />;
      case View.ONBOARDING_BIRTHDAY:
        return <OnboardingBirthday 
          settings={userSettings} 
          updateSettings={setUserSettings}
          onNext={() => setCurrentView(View.ONBOARDING_INCOME)}
        />;
      case View.ONBOARDING_INCOME:
        return <OnboardingIncome 
          settings={userSettings} 
          updateSettings={setUserSettings}
          onNext={() => setCurrentView(View.ONBOARDING_GOALS)}
          onBack={() => setCurrentView(View.ONBOARDING_BIRTHDAY)}
        />;
      case View.ONBOARDING_GOALS:
        return <OnboardingGoals 
          onNext={() => setCurrentView(View.HOME)} 
          onBack={() => setCurrentView(View.ONBOARDING_INCOME)}
        />;
      case View.HOME:
        return <Dashboard settings={userSettings} />;
      case View.ENVELOPES:
        return <Envelopes settings={userSettings} />;
      case View.ADD_PURCHASE:
        return <AddPurchase settings={userSettings} />;
      case View.SETTINGS:
        return <Settings settings={userSettings} updateSettings={setUserSettings} />;
      default:
        return <Dashboard settings={userSettings} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F9F6] text-gray-900 pb-20 safe-area-top">
      {/* Content Area */}
      <main className="w-full h-full">
        {renderView()}
      </main>

      {/* Navigation */}
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
