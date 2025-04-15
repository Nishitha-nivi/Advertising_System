import React, { useState, useEffect } from 'react';
import { Settings, Tags, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react';
import { Ad, UserPreferences, mockAds } from './data';
import PreferencesModal from './components/PreferencesModal';
import AdCard from './components/AdCard';

function App() {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<UserPreferences>({
    interests: [],
    excludedCategories: [],
  });
  const [currentAd, setCurrentAd] = useState<Ad | null>(null);

  const getRelevantAd = () => {
    const relevantAds = mockAds.filter(ad => {
      const matchesInterests = ad.categories.some(cat => 
        preferences.interests.includes(cat)
      );
      const isExcluded = ad.categories.some(cat => 
        preferences.excludedCategories.includes(cat)
      );
      return matchesInterests && !isExcluded;
    });

    if (relevantAds.length === 0) return mockAds[Math.floor(Math.random() * mockAds.length)];
    return relevantAds[Math.floor(Math.random() * relevantAds.length)];
  };

  useEffect(() => {
    const savedPrefs = localStorage.getItem('adPreferences');
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
    setCurrentAd(getRelevantAd());
  }, []);

  const handlePreferencesUpdate = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('adPreferences', JSON.stringify(newPreferences));
    setCurrentAd(getRelevantAd());
    setShowPreferences(false);
  };

  const handleNextAd = () => {
    setCurrentAd(getRelevantAd());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Tags className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-800">AdPreference</h1>
          </div>
          <button
            onClick={() => setShowPreferences(true)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Preferences</span>
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col items-center space-y-8">
          {currentAd && <AdCard ad={currentAd} />}
          
          <div className="flex space-x-4">
            <button
              onClick={handleNextAd}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <RefreshCw className="h-5 w-5 text-gray-600" />
              <span>Next Ad</span>
            </button>
            
            <div className="flex space-x-2">
              <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <ThumbsUp className="h-5 w-5 text-green-600" />
              </button>
              <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <ThumbsDown className="h-5 w-5 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {showPreferences && (
        <PreferencesModal
          preferences={preferences}
          onUpdate={handlePreferencesUpdate}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </div>
  );
}

export default App;