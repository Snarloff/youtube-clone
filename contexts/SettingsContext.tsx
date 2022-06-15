import { createContext, useEffect, useState } from 'react'
import Themes from 'utils/constants'

interface SettingsInterface {
  children?: React.ReactNode;
  settings?: any 
}

const defaultSettings = {
  theme: Themes.LIGHT
}

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: ({ theme: string }) => {}
})

export const storeSettings = (settings: object) => {
  window.localStorage.setItem('settings', JSON.stringify(settings))
}

export const restoreSettings = () => {
  let settings;

  try { 
    const storedData = window.localStorage.getItem('settings')
    if (storedData) {
      settings = JSON.parse(storedData)
    }
  } catch (e) {
    console.error(e)
  }

  return settings

}

export const SettingsProvider = ({ settings, children }: SettingsInterface) => {
  
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  )

  const handleSaveSettings = (update = {}) => {
    const mergedSettings = update

    setCurrentSettings(mergedSettings)
    storeSettings(mergedSettings)
  }

  useEffect(() => {
    const restoredSettings = restoreSettings()

    if (restoredSettings) {
      setCurrentSettings(restoredSettings)
    }

  }, [])

  return (
    <SettingsContext.Provider value={{ settings: currentSettings, saveSettings: handleSaveSettings }}>
      {children}
    </SettingsContext.Provider>
  )

}

export const SettingsConsumer = SettingsContext.Consumer
export default SettingsContext