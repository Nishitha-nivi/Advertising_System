import React, { useState } from 'react';
import { X } from 'lucide-react';
import { UserPreferences, categories } from '../data';

interface PreferencesModalProps {
  preferences: UserPreferences;
  onUpdate: (preferences: UserPreferences) => void;
  onClose: () => void;
}

const PreferencesModal: React.FC<PreferencesModalProps> = ({
  preferences,
  onUpdate,
  onClose,
}) => {
  const [localPreferences, setLocalPreferences] = useState(preferences);

  const toggleCategory = (category: string, type: 'interests' | 'excludedCategories') => {
    setLocalPreferences(prev => {
      const array = prev[type];
      const newArray = array.includes(category)
        ? array.filter(c => c !== category)
        : [...array, category];
      
      return {
        ...prev,
        [type]: newArray,
      };
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Ad Preferences</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Interests</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category, 'interests')}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      localPreferences.interests.includes(category)
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Excluded Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category, 'excludedCategories')}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      localPreferences.excludedCategories.includes(category)
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onUpdate(localPreferences)}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;