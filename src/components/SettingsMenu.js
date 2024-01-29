import React, { useState } from 'react';
import './setting.css'
function SettingsMenu() {
  // Define state to manage the settings
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'English'
  });

  // Function to handle toggling of settings
  const toggleSetting = (settingName) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [settingName]: !prevSettings[settingName]
    }));
  };

  return (
    <div className="settings-menu">
      <h2>Settings</h2>
      <ul>
        <li>
          <label>
            <input 
              type="checkbox" 
              checked={settings.darkMode} 
              onChange={() => toggleSetting('darkMode')} 
            />
            Dark Mode
          </label>
        </li>
        <li>
          <label>
            <input 
              type="checkbox" 
              checked={settings.notifications} 
              onChange={() => toggleSetting('notifications')} 
            />
            Notifications
          </label>
        </li>
        <li>
          <select 
            value={settings.language} 
            onChange={(e) => setSettings({...settings, language: e.target.value})} 
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default SettingsMenu;
